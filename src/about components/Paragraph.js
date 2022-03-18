import React from "react";
import style from "./style_about.module.css";

function Paragraph() {
  return (
    <p className={style.headerText}>
      In the demo video, you can see how you can use the various functions in
      the application. <br />
      By uploading an Excel document in the format provided by us. <br />
      Or by manually entering the offices, candidates, and voting. <br />
      Credits to 'Electing the Executive Branch' wrote by Rutvik Page, Ehud
      Shapiro & Nimrod Talmon.
    </p>
  );
}

export default Paragraph;
