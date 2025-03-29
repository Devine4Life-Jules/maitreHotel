import './App.css';
import FloorPlan from './components/FloorPlan';
import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";

const Home = () =>  <FloorPlan></FloorPlan>;
const Test = () =>  <div>Test Browser Router</div>

function App() {

  return(
    <div>
          <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/test">Test</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
      

    </div>

  )
  


}

export default App;
