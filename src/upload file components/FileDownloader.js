import React from "react";
import useDownloader from "react-use-downloader";
import csvFile from '../csv/template.xlsx';
import emptyCsvFile from '../csv/empty template.xlsx';
import style from "./style_upload.module.css";

export default function FileDownloader() {
  const { download } =useDownloader();
  const filename = "template.xlsx";
  const empty_file ="empty template.xlsx"

  return (
    <section className={style.downloadTemBox}>
      <p className={style.step}>STEP #1</p>
      <div className={style.stepParaWraper}>
        <p className={style.stepPara}>Download one of the templates</p>
      </div>
      <a
        className={style.btnDown}
        onClick={() => download(csvFile, filename)}
        href="javascript:void(0)"
      >
        Full template
      </a>
      <a
        className={style.btnDown}
        onClick={() => download(emptyCsvFile, empty_file)}
        href="javascript:void(0)"
      >
        Empty template
      </a>
    </section>
  );
}
