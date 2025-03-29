import { useState } from "react";
import OrderMenu from "./OrderMenu.jsx";
import BillModal from "./BillModal.jsx";
import Map from "./Map.jsx"
import availableProducts from "../availableProducts.js";


const FloorPlan = () => {

    const [isOrdering, setIsOrdering] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);
    const [orders, setOrders] = useState({ table1: [{ name: "Water", price: 2, quantity: 1 }],});
    const [checkedItems, setCheckedItems] = useState({}); 
    const [showBill, setShowBill] = useState(false); 




    const handleTableClick = (tableId) => {
        setIsOrdering(true);
        setSelectedTable(tableId);
    };


    const handleCloseOrdering = () => {
        setIsOrdering(false);
        setSelectedTable(null);
    };

    const calculateTotal = () => {
        if (!orders[selectedTable]) return 0;
        return orders[selectedTable].reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getTableFill = (tableId) => {
        return orders[tableId] && orders[tableId].length > 0 ? "#FF6347" : "#b7b7b7"; // Active: Tomato, Inactive: Gray
    };
    

    const handleGetBill = () => {
        setShowBill(true); 
    };

    const handleChecked = (index) => {
        setCheckedItems((prev) => ({
          ...prev,
          [index]: !prev[index], 
        }));
      };

      const handleCloseBill = () => {
        setShowBill(false);
    };

      const handleRemoveProduct = (productName) => {
        setOrders((prevOrders) => {
            return {
                ...prevOrders,
                [selectedTable]: prevOrders[selectedTable]
                    ? prevOrders[selectedTable]
                          .map((item) =>
                              item.name === productName
                                  ? { ...item, quantity: item.quantity = 0 }
                                  : item
                          )
                          .filter((item) => item.quantity > 0)
                    : [],
            };
        });
    };


    const handleDecreaseProduct = (productName) => {
        setOrders((prevOrders) => {
            return {
                ...prevOrders,
                [selectedTable]: prevOrders[selectedTable]
                    ? prevOrders[selectedTable]
                          .map((item) =>
                              item.name === productName
                                  ? { ...item, quantity: item.quantity - 1 }
                                  : item
                          )
                          .filter((item) => item.quantity > 0)
                    : [],
            };
        });
    };
    
    


    const handleClearAll = () => {
        setOrders((prevOrders) => {
            const updatedOrders = { ...prevOrders };
            updatedOrders[selectedTable] = [];
            return updatedOrders;
        });
    };


    const handleProductSelect = (product) => {
        setOrders((prevOrders) => {
            return {
                ...prevOrders,
                [selectedTable]: prevOrders[selectedTable]
                    ? prevOrders[selectedTable].map((item) =>
                          item.name === product.name
                              ? { ...item, quantity: item.quantity + 1 }
                              : item
                      ).concat(prevOrders[selectedTable].some((item) => item.name === product.name) ? [] : [{ ...product, quantity: 1 }])
                    : [{ ...product, quantity: 1 }],
            };
        });
    };
    



    return (
        <div style={{ height: "60vh", width: "60vw" }}>

            {isOrdering ? (
                <OrderMenu 
                selectedTable={selectedTable}
                availableProducts={availableProducts}
                orders={orders}
                onAddProduct={handleProductSelect}
                onDecreaseProduct={handleDecreaseProduct}
                onRemoveProduct={handleRemoveProduct}
                onClearAll={handleClearAll}
                onClose={handleCloseOrdering}
                calculateTotal={calculateTotal}
                onGetBill={handleGetBill} 
            />
            ) : (
                <Map handleTableClick={handleTableClick} getTableFill={getTableFill} />
            )}
            <BillModal
                isOpen={showBill}
                onClose={handleCloseBill}
                orders={orders[selectedTable] || []}
                total={calculateTotal()}
            />
            
            
        </div>
    );
};

export default FloorPlan;
