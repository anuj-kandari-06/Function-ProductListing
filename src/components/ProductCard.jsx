import "./ProductCard.css";
function ProductCard({product}) {
    return (
        <div className="box">
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
        </div>
    );
}
export default ProductCard;