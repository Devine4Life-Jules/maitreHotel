import { useState } from 'react';
import Table from './Table';
import './App.css';

function App() {
  const [tables, setTables] = useState([]);


  const addTable = () => {
    setTables([...tables, { id: Date.now() }]);  
  };


  const deleteTable = (id) => {
    setTables(tables.filter(table => table.id !== id));
  };
  //hello hello
  return (
    <div className="overview">
      <div className="tableContainer">
        {tables.map((table, index) => (
          <Table 
            key={table.id} 
            tableId={index + 1}  
            deleteTable={() => deleteTable(table.id)} 
          />
        ))}
      </div>
      <button onClick={addTable}>Add Table</button>
    </div>
  );
}

export default App;
