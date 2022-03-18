import React from "react";
import style from "./style_about.module.css";
import Video from "./Video";
import ResearchPaper from "./ResearchPaper";
import Paragraph from "./Paragraph";
import Footer from "../shared components/Footer";

function About() {
  return (
    <div className={style.container}>
      <header>
        <div className={style.headerTextBox}>
          <h1 className={style.title}>About The Algorithm</h1>
          <div className={style.textVideo}>
            <Paragraph />
            <Video />
          </div>
        </div>
      </header>
      <ResearchPaper />
      <Footer />
    </div>
  );
}

export default About;
