import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function ProductListing() {
    const [Products, setProducts] = useState([]);
    const [Search, setSearch] = useState("");

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            });
    }, []);

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
            </div>

            {/* <p className="text-gray-600 mb-5">Total Products: {Products.length}</p> */}


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
                {filteredProducts.length === 0 &&(
                    <p className="text-center text-gray-500 mt-8">
                        No Products found.
                    </p>
                )}
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
export default ProductListing;