import './App.css';
import Home from './home components/Home'
import Demo from "./demo components/Demo";
import UploadFile from "./upload file components/UploadFile";
import About from "./about components/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + "/"} element={<Home />} />
        <Route exact path={process.env.PUBLIC_URL + '/demo'} element={<Demo />} />
        <Route exact path={process.env.PUBLIC_URL + '/upload-file'} element={<UploadFile />} />
        <Route exact path={process.env.PUBLIC_URL + '/about'} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
