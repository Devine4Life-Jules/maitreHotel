import { useState } from 'react';
import Area from './Area';
import './App.css';

function App() {
  const [areas, setAreas] = useState([]);
  const addArea = () => {
    setAreas([...areas, { id: Date.now() }]);  
  };


  const deleteArea = (id) => {
    setAreas(tables.filter(area => area.id !== id));
  };

  return(
    <div>
          <div className="areaContainer">
          {areas.map((area, index) => (
            <Area 
              key={area.id} 
              areaId={index + 1}  
              deleteArea={() => deleteArea(area.id)} 
            />
          ))}
        </div>
      <button onClick={addArea}>Add Area</button>
      

    </div>

  )
  


}

export default App;
