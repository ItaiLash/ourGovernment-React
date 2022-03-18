import React from "react";
import style from "./style.module.css";
import UploadFileGrid from "./UploadFileGrid";
import DemoGrid from "./DemoGrid";
import AboutGrid from "./AboutGrid";

function Grid() {
  return (
    <section className={style.section}>
      <div className={style.grid3Cols}>
        <UploadFileGrid />
        <DemoGrid />
        <AboutGrid />
      </div>
    </section>
  );
}

export default Grid;
