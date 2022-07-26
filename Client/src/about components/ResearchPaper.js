import React from "react";
import style from "./style_about.module.css";
import pdf from "./article.pdf";

function ResearchPaper() {
  return (
    <div className={style.researchPaper}>
      <p className={style.aboutResearchPaper}>
        Research paper on the algorithm written by Itai Lashover, Liav Weiss,
        Amichai Kafka and Shoshana Levin
      </p>
      <a href={pdf} className={style.btn} target="_blank" rel="noreferrer">
        Reasearch Paper
      </a>
    </div>
  );
}

export default ResearchPaper;
