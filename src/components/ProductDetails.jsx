import { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom"
function ProductDetails() {
    const { id } = useParams();
    const [products, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");
    const [quantity,setQuantity] = useState(1);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProduct(data);
                setSelectedImage(data.images[0]);
            });
    }, [id]);

    if (!products) {
        return <p>Loading....</p>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex gap-4">
                    <div className="flex flex-col gap-3">
                        {products.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${products.title} ${index + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className="w-20 h-20 object-contain border rounded-md"
                            />
                        ))}
                    </div>

                    <div className="w-80 h-80 border rounded-lg flex items-center justify-center">
                        <img
                            src={selectedImage}
                            alt={products.title}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {products.title}
                    </h1>
                    <div className="flex items-center gap-2 mt-3">
                        <span className="text-yellow-500">
                            ⭐
                        </span>

                        <span className="font-medium">
                            {products.rating}
                        </span>

                        <span>
                            Rating
                        </span>
                    </div>
                    <div className="mt-5">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-blue-600 mt-5">
                                ${products.price}
                            </span>
                            <span className="bg-red-100 text-red-600 px-2 py-1 rounded-md text-sm font-semibold">
                                {products.discountPercentage}% OFF
                            </span>
                        </div>
                        <p className="text-gray-400 line-through mt-1">
                            $
                            {(
                                products.price /
                                (1 - products.discountPercentage / 100)
                            ).toFixed(2)}
                        </p>
                    </div>

                    <p className="mt-4 text-gray-600">
                        <span className="font-semibold">
                            Category:
                        </span>{" "}
                        {products.category}
                    </p>

                    <p className="mt-2 text-gray-600">
                        <span className="font-semibold">
                            Brand:
                        </span>{" "}
                        {products.brand}
                    </p>

                    <p className="mt-2 text-gray-600">
                        <span className="font-semibold">
                            Stock:
                        </span>{" "}
                        {products.stock}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-lg font-bold">
                            Description
                        </h2>

                        <p className="text-gray-600 mt-2 leading-6">
                            {products.description}
                        </p>
                    </div>
                    <div className="mt-6">
                        <p className="font-semibold mb-2">
                            Quantity
                        </p>
                        <div className="flex items-center border border-gray-300 rounded-md w-fit">
                            <button onClick={()=>setQuantity (quantity > 1 ? quantity -1 : 1 )}
                             className="px-4 py-2 text-lg hover:bg-gray-100">
                                -
                            </button>
                            <span className="px-5 py-2 border-x border-gray-300">
                                {quantity}
                            </span>
                            <button onClick={()=> setQuantity(quantity+1)} 
                            className="px-4 py-2 text-lg hover:bg-gray-100">
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                            ADD TO CART
                        </button>
                        <button className="border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-100">
                            WISHLIST
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails