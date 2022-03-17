import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Demo from "./Demo";
import UploadFile from "./UploadFile";
import About from "./About";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/demo" element={<Demo />} />
        <Route exact path="/upload-file" element={<UploadFile />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
