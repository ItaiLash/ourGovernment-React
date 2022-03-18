import React from "react";
import style from "./style_about.module.css";

function ResearchPaper() {
  return (
    <div className={style.researchPaper}>
      <p className={style.aboutResearchPaper}>
        Research paper on the algorithm written by Itai Lashover, Liav Weiss,
        Amichai Kafka and Shoshana Levin
      </p>
      <a href="#" className={style.btn}>
        Reasearch Paper
      </a>
    </div>
  );
}

export default ResearchPaper;
