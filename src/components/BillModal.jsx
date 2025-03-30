
const BillModal = ({ isOpen, onClose, orders, total }) => {
    if (!isOpen) return null;

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Bill for Table</h2>
                <ul>
                    {orders.map((item, index) => (
                        <li key={index}>
                            {item.name} - {item.quantity} x ${item.price} = ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
                <hr />
                <h3>Total: ${total}</h3>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BillModal;
