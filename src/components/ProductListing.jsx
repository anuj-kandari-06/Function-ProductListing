import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function ProductListing() {
    const [Products, setProducts] = useState([]);
    const [Search, setSearch] = useState("");
    const [priceMin, setPriceMin] = useState(0);
    const [priceMax, setPriceMax] = useState(0);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=0")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
                setPriceMin(
                    Math.floor(
                        Math.min(
                            ...data.products.map((product) => product.price)
                        )
                    )
                );
                setPriceMax(
                    Math.ceil(
                        Math.max(
                            ...data.products.map((product) => product.price)
                        )
                    )
                );
            });
    }, []);

    const minPrice = Products.length
        ? Math.floor
            (Math.min(...Products.map((product) => product.price))
            )
        : 0;

    const maxPrice = Products.length
        ? Math.ceil
            (Math.max(...Products.map((product) => product.price))
            )
        : 0;

    const filteredProducts = Products.filter((product) => product.title.toLowerCase().includes(Search.toLocaleLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Product Listing
            </h1>

            <div className="flex justify-center mb-6">
                <div className="relative w-full max-w-lg">
                    <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"></i>
                    <input
                        type="text"
                        placeholder="Search Product....."
                        value={Search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-3 pl-11 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                    />

                </div>
                {/* <div className="my-6 flex flex-wrap items-center gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Minimum Price
                        </label>
                        <input type="number" value={priceMin} min={minPrice} max={priceMax} onChange={(e)=>setPriceMin(Number(e.target.value))}
                        className="w-32 border border-gray-300 rounded-md p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Maximum Price
                        </label>
                        <input type="number" value={priceMax} min={priceMin} max={maxPrice} onChange={(e)=>setPriceMax(Number(e.target.value))}
                        className="w-32 border border-gray-300 rounded-md p-2"
                        />
                    </div>
                </div> */}
            </div>
            <div className="flex gap-6">
                <aside className="w-64 shrink-0 border border-gray-200 rounded-lg p-5">
                    <h2 className="text-lg font-bold">
                        Filters
                    </h2>
                    <div className="mt-6">
                        <h3 className="font-semibold mb-3">Category</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                <span>Beauty</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                <span>Furniture</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                <span>Groceries</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                <span>Smartphones</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="mt-6 border-t border-gray-200 pt-5">
                        <h3 className="font-semibold mb-3">
                            Brand
                        </h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input type="checkbox"/>
                                <span>Apple</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox"/>
                                <span>Samsung</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox"/>
                                <span>OPPO</span>
                            </label>

                            <label className="flex items-center gap-2">
                                <input type="checkbox"/>
                                <span>Huawei</span>
                            </label>
                        </div>
                    </div>
<div className="mt-6 border-t border-gray-200 pt-5">
    <h3 className="font-semibold mb-4">
        Price Range
    </h3>

    <div className="flex justify-between text-sm mb-4">
        <span>${priceMin}</span>
        <span>${priceMax}</span>
    </div>
    <div className="relative h-2 rounded-full bg-gray-200">
        <div className="absolute h-2 rounded-full bg-blue-600"
            style={{
                left:`${(priceMin/maxPrice)*100}%`,
                right:`${100-(priceMax/maxPrice)*100}%`,
         }}>
            
            <input type="range" min={0} max={maxPrice} value={priceMin} onChange={(e)=>{
                const value =Number(e.target.value);
                if(value <= priceMax) setPriceMin(value);
            }}
            className="price-slider"/>
            <input type="range" min={0} max={maxPrice} value={priceMax} onChange={(e)=>{
                const value =Number(e.target.value);
                if(value >=priceMin) setPriceMax(value);
            }}
            className="price-slider"/>
        </div>
    </div>
</div>

                </aside>

                <div className="flex-1 min-w-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
                        {filteredProducts.length === 0 && (
                            <p className="text-center text-gray-500 mt-8">
                                No Products found.
                            </p>
                        )}
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductListing;