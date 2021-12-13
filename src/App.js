import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
      <>
      <Router>
      <Navbar title = "React"/>
      <div className = "my-4">
      
      <Routes>
      <Route path="/about" element={<About/>} />
      <Route path="/" element={<Textform/>} />
      </Routes>


      {/* <About/> */}
      </div>
      </Router>
      </>
  );
}

export default App;
