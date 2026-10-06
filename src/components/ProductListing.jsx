import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


function ProductListing() {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products);
            });
    }, []);


    return (
        <div className="max-w-7xl mx-auto px-5 py-10">
            <h1 className="text-3xl font-bold text-center mb-8">
                Product Listing
                </h1>

            <div className="flex justify-center mb-6">
                <input type="text" placeholder="Search Product....." className="w-full max-w-lg px-4 py-3 border border-gray-300 rounded-lg outline-solid focus:ring-2 focus:ring-blue-500" />
            </div>

            {/* <p className="text-gray-600 mb-5">Total Products: {Products.length}</p> */}


             <div className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-lg transition">
                {Products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
export default ProductListing;