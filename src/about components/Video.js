import React from "react";
import style from "./style_about.module.css";
import logo from "../img/logo.jpeg";

function Video(){
    return (
      <div>
        <video
          className={style.video}
          controls
          poster={logo}
        >
          <source
            src="https://archive.org/download/ElephantsDream/ed_hd.ogv"
            type="video/ogg"
          />
          <source
            src="https://archive.org/download/ElephantsDream/ed_hd.avi"
            type="video/avi"
          />
          <source
            src="https://archive.org/download/ElephantsDream/ed_1024_512kb.mp4"
            type="video/mp4"
          />
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>
    );
};

export default Video;
