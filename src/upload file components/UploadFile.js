import React from "react";
import style from "./style_upload.module.css";
import FileDownloader from "./FileDownloader";
import FileUploader from "./FileUploader";
import Footer from "../shared components/Footer";
import Icon from "./Icon";

function UploadFile() {
  return (
    <div className={style.container}>
      <header>
        <div className={style.headerTextBox}>
          <h1 className={style.title}>Electing the executive branch</h1>
          <p className={style.headerText}></p>
        </div>
      </header>

      <section>
        <FileDownloader />
        {/* <div className={style.grid4Rows}> */}
          {/* <figure className={style.option}>
            <FileDownloader />
          </figure> */}

          <figure className={style.option}>
            <div className={style.uploadBox}>
            <FileUploader />
            </div>
          </figure>

          {/* <figure className={style.option}>
            <div className={style.runBox}>
              <Icon />
              <a href="#" className={style.btn}>
                Download Template
              </a>
            </div>
          </figure>

          <figure className={style.option}>
            <div className={style.downloadResBox}>
              <Icon />
              <a href="#" className={style.btn}>
                Download Results
              </a>
            </div>
          </figure>

          <figure className={style.stats}>
            <div className={style.statsBox}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={style.statIcon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
              <a href="#" className={style.btn}>
                Download Full Statistics
              </a>
            </div>
          </figure> */}
        {/* </div> */}
      </section>

      <Footer />
    </div>
  );
}

export default UploadFile;
