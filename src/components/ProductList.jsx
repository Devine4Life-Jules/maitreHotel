import availableProducts from '../availableProducts.js'


const ProductList = ({ products, onSelect }) => {
    return (
        <ul className="menu">
            {products.map((product, index) => (
                <button 
                    onClick={() => onSelect(product)} 
                    className="option" 
                    key={index}
                >
                    {product.name} - ${product.price}
                </button>
            ))}
        </ul>
    );
};

export default ProductList;