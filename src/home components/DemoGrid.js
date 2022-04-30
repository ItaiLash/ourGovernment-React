import React from "react";
import style from "./style.module.css";

function DemoGrid() {
  return (
    <figure className={style.option}>
      <div className={style.optionBox}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={style.optionIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p className={style.cardDescription}>
          Want to try the algorithm for yourself?<br></br>Want to make a fair
          distribution?<br></br>
          Create harmony by fair allocation.<br></br>
          <br></br>
        </p>

        <a href="/demo" className={style.btn}>
          Demo
        </a>
      </div>
    </figure>
  );
}

export default DemoGrid;
