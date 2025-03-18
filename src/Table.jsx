import { useState } from 'react';

const Table = ({ tableId, deleteTable }) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [inputValue, setInputValue] = useState("name");
  const [checkedItems, setCheckedItems] = useState({}); 


  const [availableProducts] = useState([
    { name: 'Spaghetti', price: 18 },
    { name: 'Hamburger', price: 19 },
    { name: 'Croque Monsieur', price: 14 },
    { name: 'Water', price: 2 },
  ]);

  const handleAddOrder = () => {
    setIsOrdering(true);
  };

  const handleChecked = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle only the clicked checkbox
    }));
  };


  const handleProductSelect = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setIsOrdering(false);
  };

  const handleRemoveProduct = (index) => {
    setSelectedProducts(selectedProducts.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="table">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Table {tableId}</h3> 
        <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
          />
        <button onClick={deleteTable} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </button>
      </div>

      {!isOrdering && selectedProducts.length === 0 && (
        <div>
          <button onClick={handleAddOrder}>ADD ORDER</button>
        </div>
      )}

      {isOrdering && (
        <div>
          <h3>Select Products</h3>
          {availableProducts.map((product, index) => (
            <div key={index} onClick={() => handleProductSelect(product)}>
              <p>{product.name} - {product.price}$</p>
            </div>
          ))}
        </div>
      )}

      {!isOrdering && selectedProducts.length > 0 && (
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
          <p>TOTAL: {calculateTotal()}$</p>
          <button onClick={handleAddOrder}>ADD MORE</button>
        </div>
      )}
    </div>
  );
};

export default Table;
