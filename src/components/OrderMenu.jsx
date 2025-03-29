import ProductList from "./ProductList";
import OrderList from "./OrderList";

const OrderMenu = ({ selectedTable, availableProducts, orders, onAddProduct, onRemoveProduct, onDecreaseProduct, onClearAll, onClose, calculateTotal, onGetBill }) => {
    return (
        <div>
            <h2>Ordering for Table {selectedTable}</h2>
            <div className="ordering-mode">
            
                {/* Product Selection */}
                <ProductList products={availableProducts} onSelect={onAddProduct} />
                {/* Order List */}
                <OrderList
                    orders={orders[selectedTable]}
                    onIncrease={onAddProduct}
                    onDecrease={onDecreaseProduct}
                    onRemove={onRemoveProduct}
                />
                {/* Controls */}

            </div>
            <div>
                    <button onClick={onGetBill} style={{ backgroundColor: 'green', color: 'white' }}>Get Bill</button>
                    <button onClick={onClearAll} style={{ backgroundColor: 'orange', color: 'white' }}>Clear All</button>
                    <button onClick={onClose}>Close Ordering Mode</button>
                </div>
        </div>
    );
};

export default OrderMenu;
