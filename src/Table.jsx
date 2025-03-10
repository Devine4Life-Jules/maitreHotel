import PropTypes from 'prop-types';
import { useState } from 'react';

const Table = ({ tableId, deleteTable }) => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [availableProducts] = useState([
    { name: 'Spaghetti', price: 18 },
    { name: 'Hamburger', price: 19 },
    { name: 'Croque Monsieur', price: 14 },
    { name: 'Water', price: 2 },
  ]);

  const handleAddOrder = () => {
    setIsOrdering(true);
  };

  const handleProductSelect = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setIsOrdering(false);
  };

  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="table">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Table {tableId}</h3> {/* ✅ Now properly numbered */}
        <button onClick={deleteTable} style={{ backgroundColor: 'red', color: 'white' }}>
          Delete
        </button>
      </div>

      {!isOrdering && selectedProducts.length === 0 && (
        <div>
          <p>DATA: None</p>
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
          <input defaultValue="name" type="text" />
          {selectedProducts.map((product, index) => (
            <div key={index}>
              <p>{product.name} - {product.price}$</p>
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
