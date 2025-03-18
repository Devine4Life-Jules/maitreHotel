import { useState } from 'react';
import Table from './Table';

const Area = ( { areaId, deleteArea } ) => {
    const [tables, setTables] = useState([]);


    const addTable = () => {
      setTables([...tables, { id: Date.now() }]);  
    };
  
  
    const deleteTable = (id) => {
      setTables(tables.filter(table => table.id !== id));
    };
  
    return (
      <div className="overview">
        
        <div className="tableContainer">
        <button onClick={deleteArea}>Remove Area</button>
          {tables.map((table, index) => (
            <Table 
              key={table.id} 
              tableId={index + 1}  
              deleteTable={() => deleteTable(table.id)} 
            />
          ))}
          <button onClick={addTable}>Add Table</button>
        </div>
        
      </div>
    );

}

export default Area;
