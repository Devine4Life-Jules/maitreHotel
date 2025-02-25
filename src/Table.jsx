import  { useState } from 'react';

const Table = () => {
  const [isOrdering, setIsOrdering] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [availableProducts] = useState([
    { name: 'Sparglenal', price: 98 },
    { name: 'Hamburger', price: 136 },
    { name: 'Croque Moncliner', price: 136 },
    { name: 'Water', price: 23 },
  ]);

  // Function to handle adding an order
  const handleAddOrder = () => {
    setIsOrdering(true);
  };

  // Function to handle selecting a product
  const handleProductSelect = (product) => {
    setSelectedProducts([...selectedProducts, product]);
    setIsOrdering(false); // Return to the table overview
  };

  // Function to calculate the total price
  const calculateTotal = () => {
    return selectedProducts.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      {/* Empty State */}
      {!isOrdering && selectedProducts.length === 0 && (
        <div>
          <p>Table 1</p>
          <p>DATA: None</p>
          <button onClick={handleAddOrder}>ADD ORDER</button>
        </div>
      )}

      {/* Product Selection State */}
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

      {/* Table Overview State */}
      {!isOrdering && selectedProducts.length > 0 && (
        <div>
          <h3>Table 1</h3>
          <p>DATA:</p>
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