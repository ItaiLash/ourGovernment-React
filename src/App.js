import './App.css';
import Home from './home components/Home'
import Demo from "./demo components/Demo";
import UploadFile from "./upload file components/UploadFile";
import About from "./about components/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
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
