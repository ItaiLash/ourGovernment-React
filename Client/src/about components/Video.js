import React from "react";
import style from "./style_about.module.css";
import YouTube from "react-youtube";

function Video() {
  const opts = {
    height: "300px",
    width: "500px",
  };

  return (
    <div>
      <YouTube className={style.video} videoId="TvTPrhCTbF4" opts={opts} />
    </div>
  );
}

export default Video;