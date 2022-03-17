import React from "react";
import "../style.css";
import UploadFileGrid from "./UploadFileGrid";
import DemoGrid from "./DemoGrid";
import AboutGrid from "./AboutGrid";

function Grid() {
  return (
    <section>
      <div className="grid-3-cols">
        <UploadFileGrid />
        <DemoGrid />
        <AboutGrid />
      </div>
    </section>
  );
}

export default Grid;
