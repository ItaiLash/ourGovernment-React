import React from "react";
import "./style_about.css";
import Video from "./about components/Video";
import ResearchPaper from "./about components/ResearchPaper";
import Paragraph from "./about components/Paragraph";
import Footer from "./shared components/Footer";

function About() {
  return (
    <div className="container">
      <header>
        <div className="header-text-box">
          <h1>About The Algorithm</h1>
          <div className="text--video">
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
