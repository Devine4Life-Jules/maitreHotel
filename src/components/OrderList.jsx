const OrderList = ({ orders, onIncrease, onDecrease, onRemove }) => {
    return (
        <div className="orderList">
            {orders?.length > 0 ? (
                orders.map((product, index) => (
                    <div key={index} className="orderItem">
                        <div class="orderItemBtns">
                            <button onClick={() => onDecrease(product.name)}>-</button>
                            <p>{product.name} - ${product.price} (x{product.quantity})</p>
                            
                            <button onClick={() => onIncrease(product)}>+</button>
                        </div>
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
