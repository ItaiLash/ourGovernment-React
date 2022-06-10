import React from "react";
import style from "./style_upload.module.css";


function Paragraph() {
  return (
    <div>
      <h2 className={style.subtitle}>
        {" "}
        <br />
        Use our algorithm for unlimited number of voters using Excel file.
        <br />
        <br />
        It's easy, just follow the steps.
        <br />
      </h2>
      <br />
      <p> Note: you must use in one of the templates we provide.</p>
    </div>
  );
}

export default Paragraph;