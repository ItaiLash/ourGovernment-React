import React from "react";
import style from "./style.module.css";


function UploadFileGrid() {
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
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
          />
        </svg>
        <p className={style.cardDescription}>
          Download a template of the current government, enter all the voters'
          votes and let the algorithm provide you a fair distribution of
          candidates for office.
        </p>

        <a href="/upload-file" className={style.btn}>
          Upload File
        </a>
      </div>
    </figure>
  );
}

export default UploadFileGrid;
