import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Table from './Table'
import './App.css'

function App() {

  const [tables, setTables] = useState([1]); 

  const addTable = () => {
    setTables([...tables, tables.length + 1]); 
  };

  return (
    <div className="overview">
      <div className="tableContainer">
        {/* Render tables based on the state */}
        {tables.map((tableId) => (
          <Table key={tableId} />
        ))}
      </div>
      <button onClick={addTable}>Add Table</button>
    </div>
  );

}

export default App
