import { useState } from "react";


const alertTest = () => {
    alert("test");
}

const FloorPlan = () => {

    const [isOrdering, setIsOrdering] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [checkedItems, setCheckedItems] = useState({}); 

    const availableProducts = [
        { name: 'Spaghetti', price: 18 },
        { name: 'Hamburger', price: 19 },
        { name: 'Croque Monsieur', price: 14 },
        { name: 'Water', price: 2 },
    ];


    const handleTableClick = (tableId) => {
        setIsOrdering(true);
        setSelectedTable(tableId);
    };


    const handleCloseOrdering = () => {
        setIsOrdering(false);
        setSelectedTable(null);
    };

    const handleChecked = (index) => {
        setCheckedItems((prev) => ({
          ...prev,
          [index]: !prev[index], 
        }));
      };

    const handleRemoveProduct = (index) => {
        setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
      };

    const handleProductSelect = (product) => {
        setSelectedProducts([...selectedProducts, product]);
        
      };


    return (
        <div style={{ height: "60vh", width: "60vw" }}>

            {isOrdering ? (
                <div className="ordering-mode">
                <h2>Ordering for Table {selectedTable}</h2>
                <ul>
                    {availableProducts.map((product, index) => (
                        <button onClick={() => handleProductSelect(product)} class="option" key={index}>{product.name} - ${product.price}</button>
                    ))}
                </ul>
                <div>
                {selectedProducts.map((product, index) => (
                <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <input 
                type="checkbox" 
                checked={checkedItems[index] || false} // Default to false if undefined
                onChange={() => handleChecked(index)} 
                />
                <p>{product.name} - {product.price}$</p>
                <button onClick={() => handleRemoveProduct(index)} style={{ backgroundColor: 'red', color: 'white' }}>Remove</button>
                </div>
                ))}
                </div>
                
                <button onClick={handleCloseOrdering}>Close Ordering Mode</button>
                </div>
            ) : (<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1920 1080">
                <g>
                    <g id="Layer_1">
                        <g>
                            <rect fill="#635e5e" x=".5" y=".5" width="1919" height="1079" />
                            <path d="M1919,1v1078H1V1h1918M1920,0H0v1080h1920V0h0Z" />
                        </g>
                    </g>
                    <g id="Bar" >
                        <g>
                            <rect fill="#b7b7b7" x="1079.1" y="133.1" width="840.4" height="134.2" />
                            <path d="M1919,133.6v133.2h-839.4v-133.2h839.4M1920,132.6h-841.4v135.2h841.4v-135.2h0Z" />
                        </g>
                    </g>
                    <g id="table1" className="spot" onClick={() => handleTableClick("table1")}>
                        <g>
                            <rect fill="#b7b7b7" x="178.6" y="567.7" width="196.5" height="396.3" />
                            <path d="M374.6,568.2v395.3h-195.5v-395.3h195.5M375.6,567.2h-197.5v397.3h197.5v-397.3h0Z" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="411.2" y="860.1" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="411.2" y="723.8" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="411.2" y="587.5" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="55" y="860.1" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="55" y="723.8" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="55" y="587.5" width="89.4" height="89.4" />
                        </g>
                    </g>
                    <g id="table3" className="spot" onClick={() => handleTableClick("table3")}>
                        <g>
                            <rect fill="#b7b7b7" x="1310.4" y="666.7" width="396.3" height="196.5" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1319.9" y="899.2" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1456.2" y="899.2" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1592.5" y="899.2" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1319.9" y="543.1" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1456.2" y="543.1" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1592.5" y="543.1" width="89.4" height="89.4" />
                        </g>
                    </g>
                    <g id="barSpot5" className="spot" onClick={() => handleTableClick("barSpot5")}>
                    <g>
                        <rect className="cls-1" fill="#efefef" x="1667.6" y="317.5" width="89.4" height="89.4"/>
                        <path d="M1756.4,318v88.4h-88.4v-88.4h88.4M1757.4,317h-90.4v90.4h90.4v-90.4h0Z"/>
                    </g>
                    </g>
                    <g id="barSpot4" className="spot" onClick={() => handleTableClick("barSpot4")}>
                    <g>
                        <rect className="cls-1" fill="#efefef" x="1514.1" y="317.5" width="89.4" height="89.4"/>
                        <path d="M1603,318v88.4h-88.4v-88.4h88.4M1604,317h-90.4v90.4h90.4v-90.4h0Z"/>
                    </g>
                    </g>
                    <g id="barSpot3" className="spot" onClick={() => handleTableClick("barSpot3")}>
                    <g>
                        <rect className="cls-1" fill="#efefef" x="1370.1" y="317.5" width="89.4" height="89.4"/>
                        <path d="M1459,318v88.4h-88.4v-88.4h88.4M1460,317h-90.4v90.4h90.4v-90.4h0Z"/>
                    </g>
                    </g>
                    <g id="barSpot2" className="spot" onClick={() => handleTableClick("barSpot2")}>
                    <g>
                        <rect className="cls-1" fill="#efefef" x="1225.1" y="317.5" width="89.4" height="89.4"/>
                        <path d="M1313.9,318v88.4h-88.4v-88.4h88.4M1314.9,317h-90.4v90.4h90.4v-90.4h0Z"/>
                    </g>
                    </g>
                    <g id="barSpot1" className="spot" onClick={() => handleTableClick("barSpot1")}>
                    <g>
                        <rect className="cls-1" fill="#efefef" x="1084.1" y="317.5" width="89.4" height="89.4"/>
                        <path d="M1172.9,318v88.4h-88.4v-88.4h88.4M1173.9,317h-90.4v90.4h90.4v-90.4h0Z"/>
                    </g>
                    </g>
                    <g id="table2" className="spot" onClick={() => handleTableClick("table2")}>
                        <g>
                            <rect fill="#b7b7b7" x="822.6" y="679.7" width="196.5" height="222" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="698.6" y="814.2" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="698.6" y="677.9" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1045.5" y="814.2" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="1045.5" y="677.9" width="89.4" height="89.4" />
                        </g>
                    </g>
                    <g id="table6" className="spot" onClick={() => handleTableClick("table6")}>
                        <g>
                            <rect fill="#efefef" x="600.3" y="82.5" width="89.4" height="89.4" /> 
                        </g>
                        <g>
                            <rect fill="#efefef" x="600.3" y="363.7" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#b7b7b7" x="566" y="186.3" width="158.1" height="158.1" />
                        </g>
                    </g>
                    <g id="table5" className="spot" onClick={() => handleTableClick("table5")}>
                        <g>
                            <rect fill="#efefef" x="376.8" y="82.5" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="376.8" y="363.7" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#b7b7b7" x="342.5" y="186.3" width="158.1" height="158.1" />
                        </g>
                    </g>
                    <g id="table4" className="spot" onClick={() => handleTableClick("table4")}>
                        <g>
                            <rect fill="#efefef" x="152.7" y="82.5" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#efefef" x="152.7" y="363.7" width="89.4" height="89.4" />
                        </g>
                        <g>
                            <rect fill="#b7b7b7" x="118.3" y="186.3" width="158.1" height="158.1" />
                        </g>
                    </g>
                </g>
            </svg>)}
            
            
        </div>
    );
};

export default FloorPlan;
