import "./ProductCard.css";
function ProductCard({ product }) {
    return (
        <div className="h-full border border-gray-200 rounded-xl p-4 shadow-sm hover:-translate-y-1 hover:shadow-lg transition text-center">
            <div className="relative group">
                <img src={product.thumbnail}
                    alt={product.title}
                    className="w-full h-48 object-contain rounded-lg hover:scale-105 transition"
                />
                <div className="absolute bottom-0 left-0 w-full px-3 pb-3 opacity-0 group-hover:opacity-100 transition">
                    <a
                        href={`/products/${product.id}`}
                        className="block w-full bg-white text-center text-gray-800 font-semibold py-3 rounded-md shadow-md hover:bg-gray-100"
                    >
                        VIEW PRODUCT
                    </a>
                </div>
                {/* <span className="absolute bottom-0 left-0 w-full bg-black/70 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition"> */}
                <h2 className="font-bold text-center mt-3">{product.title}</h2>
                {/* </span> */}
            </div>
            <p className="mt-3">
                <span className="font-medium">Price:</span>{" "}
                <span className="font-bold text-blue-600">
                    ${product.price}
                </span>
            </p>

            <div className="flex items-center gap-2 justify-center">
                <span className="font-medium">Rating:</span>

                <i className="fa-solid fa-star text-yellow-400"></i>

                <span>{product.rating}</span>
            </div>
            <p className="text-sm text-gray-500">
                <span className="font-black">Category:</span>{" "}
                {product.category}
            </p>

        </div>
    );
}
export default ProductCard;