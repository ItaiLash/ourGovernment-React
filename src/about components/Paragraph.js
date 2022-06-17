import React from "react";
import style from "./style_about.module.css";

function Paragraph() {
  return (
      <p className={style.headerText}>
        The demo video, describe how you can use the various functions that our
        application offers. <br />
        By uploading an Excel document in the format provided by us, or by
        manually entering the offices, candidates, and voting. <br />
        The website implements the algorithm
        <br />
        <strong>"Greedy PAV"</strong>, described by Rutvik Page, Ehud Shapiro &
        Nimrod Talmon (2020) in the paper
      <a className={style.link} href="https://arxiv.org/abs/2009.09734">
          : "Electing the Executive Branch" (active link).
        </a>
      </p>
  );
}

export default Paragraph;
