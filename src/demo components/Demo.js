import React from "react";
import style from './style_demo.module.css';
import Paragraph from "./Paragraph";
import Footer from '../shared components/Footer'
import Input from './Input'

function Demo() {
  
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
