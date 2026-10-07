import "./ProductCard.css";
function ProductCard({ product }) {
    return (
        <div className="h-full border border-gray-200 rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition">
            <img src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain rounded-lg hover:scale-105 transition"
            />


            <h3 className="mt-4 text-lg font-semibold min-h-14 text-gray-800">
                {product.title}
            </h3>

            <p className="mt-3">
                <span className="font-medium">Price:</span>{" "}
                <span className="font-bold text-blue-600">
                    ${product.price}
                </span>
            </p>

            <div className="flex items-center gap-2 mt-2">
                <span className="font-medium">Rating:</span>

                <i className="fa-solid fa-star text-yellow-400"></i>

                <span>{product.rating}</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Category:</span>{" "}
                {product.category}
            </p>
            <a href="{`/products/${product.id}`}" className="inline-block mt-4 text-blue-600 font-medium hover:underline">View Product</a>
        </div>
    );
}
export default ProductCard;