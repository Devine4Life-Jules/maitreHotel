import {useState} from 'react'
import Area from './Area';


const TryOut1 = () => {

    //test
    const [areas, setAreas] = useState([{ id: 1 },
        { id: 2 },]);
      const addArea = () => {
        setAreas([...areas, { id: Date.now() }]);  
      };
    
    
      const deleteArea = (id) => {
        setAreas(areas.filter(area => area.id !== id));
      };

      
        return (
            <div>
                <div className="areaContainer">
                
                <div>
                {areas.map((area, index) => (
                    <Area
                    key={area.id}
                    areaId={area.id}
                    deleteArea={() => deleteArea(area.id)}
                    />
                ))}
                </div>
                        </div>
                        <button onClick={addArea}>Add Area</button>
            </div>
        )
    
}

export default TryOut1;




