import React from "react";
import useDownloader from "react-use-downloader";
import csvFile from '../csv/template.xlsx';
import emptyCsvFile from '../csv/empty template.xlsx';
import Icon from "./Icon";
import style from "./style_upload.module.css";

export default function FileDownloader() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
      useDownloader();
    
  const filename = "template.xlsx";
  const empty_file ="empty template.xlsx"

  return (
    <section className={style.downloadTemBox}>
        {/* <Icon /> */}
      {/* <p>Download is in {isInProgress ? "in progress" : "stopped"}</p> */}
      <a
        className={style.btn}
        onClick={() => download(csvFile, filename)}
              href="#"
      >
        Download template
      </a>
      <a
        className={style.btn}
        onClick={() => download(emptyCsvFile, empty_file)}
              href="#"
      >
        Empty template
      </a>
      {/* <button onClick={() => cancel()}>Cancel the download</button>
      <p>Download size in bytes {size}</p>
      <label for="file">Downloading progress:</label>
      <progress id="file" value={percentage} max="100" />
      <p>Elapsed time in seconds {elapsed}</p>
      {error && <p>possible error {JSON.stringify(error)}</p>} */}
    </section>
  );
}
