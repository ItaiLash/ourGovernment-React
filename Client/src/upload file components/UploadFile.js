import React from "react";
import style from "./style_upload.module.css";
import FileDownloader from "./FileDownloader";
import FileUploader from "./FileUploader";
import Footer from "../shared components/Footer";
import Paragraph from "./Paragraph";

function UploadFile() {
  return (
    <div className={style.container}>
      <header>
        <div className={style.headerTextBox}>
          <h1 className={style.title}>Electing the executive branch</h1>
          <Paragraph />
        </div>
      </header>

      <section>
        <FileDownloader />
          <figure className={style.option}>
            <div className={style.uploadBox}>
            <FileUploader />
            </div>
          </figure>
      </section>

      <Footer />
    </div>
  );
}

export default UploadFile;
