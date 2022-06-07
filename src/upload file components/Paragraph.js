import React from "react";
import style from "./style_upload.module.css";


function Paragraph() {
  return (
    <p>
      <h2 className={style.subtitle}> <br/>
      Use our algorithm for unlimited number of voters using Excel file.
      <br />
      <br />
      It's easy, just follow the steps.
      <br /></h2>
      <br className={style.headerText}/>
      Note: you must use in one of the templates we provide.
      <br />
    </p>
  );
}

export default Paragraph;