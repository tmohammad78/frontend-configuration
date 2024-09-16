import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import './App.css';

const eventSample  = window.mfeEvent
console.log(eventSample)
function App() {
  // eventSample.subscribe("auth",(data) => {
  //   console.log(data)
  // })
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
        <Routes >
          <Route exact path="/"  element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
}

export default App;
