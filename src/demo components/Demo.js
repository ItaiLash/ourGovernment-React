import React ,{useEffect,useState}from "react";
import style from './style_demo.module.css';
import Paragraph from "./Paragraph";
import Footer from '../shared components/Footer'
import Input from './Input'

function Demo() {

  const [pav,setResult]=useState([]);

  useEffect(()=>{
    fetch("http://127.0.0.1:8000/api/pav/0/compute_pav",{
      method:'GET',
  
    })
    .then(resp => resp.json())
    .then(resp => setResult(resp))
    // .then(resp => console.log(resp.result))
    

  }, [])
  


  
  return (
    <div className={style.container}>
      <header>
        <div className={style.headerTextBox}>
          <h1 className={style.title}>Try Our Algorithm</h1>
          <div className={style.textOffices}>
            <Paragraph />
          </div>
        </div>
      </header>
      <div>
        <Input />
      </div>
      <Footer />
    </div>
    /* <div>
       {pav.result}
     </div>  */
  );
}

export default Demo;
