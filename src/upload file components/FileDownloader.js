import React from "react";
import useDownloader from "react-use-downloader";
import csvFile from '../csv/template.xlsx';
import emptyCsvFile from '../csv/empty template.xlsx';
import style from "./style_upload.module.css";

export default function FileDownloader() {
  const { download } =useDownloader();
  const filename = "template.xlsx";
  const empty_file = "empty template.xlsx"
  
  const [emptyClicked, setEmptyClicked] = React.useState(false);
  const [fullClicked, setFullClicked] = React.useState(false);
  const completeTemplateDownload =
    (emptyClicked || fullClicked) ? style.taskCompleted : "";


  return (
    <section className={`${style.downloadTemBox} ${completeTemplateDownload}`}>
      <p className={style.step}>STEP #1</p>
      <div className={style.stepParaWraper}>
        <p className={style.stepPara}>Download one of the templates</p>
      </div>
      <a
        className={style.btnDown}
        onClick={() => {
          download(csvFile, filename);
          setFullClicked(true);
        }}
        href="javascript:void(0)"
      >
        Full template
      </a>
      <a
        className={style.btnDown}
        onClick={() => {
          download(emptyCsvFile, empty_file);
          setEmptyClicked(true);
        }}
        href="javascript:void(0)"
      >
        Empty template
      </a>
    </section>
  );
}
