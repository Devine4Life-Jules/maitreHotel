const OrderList = ({ orders, onIncrease, onDecrease, onRemove }) => {
    return (
        <div class="orderList">
            {orders?.length > 0 ? (
                orders.map((product, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <button onClick={() => onDecrease(product.name)}>-</button>
                        <p>{product.name} - ${product.price} (x{product.quantity})</p>

                        
                        <button onClick={() => onIncrease(product)}>+</button>
                        <button onClick={() => onRemove(product.name)} style={{ backgroundColor: 'red', color: 'white' }}>
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p>No items added yet.</p>
            )}
        </div>
    );
};

export default OrderList;
