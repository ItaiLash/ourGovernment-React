import React from "react";
import useDownloader from "react-use-downloader";
import csvFile from '../csv/template.xlsx';
import Icon from "./Icon";

export default function FileDownloader() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
      useDownloader();
    
  const filename = "template.xlsx";

  return (
    <div class="download-tem-box">
        <Icon />
      {/* <p>Download is in {isInProgress ? "in progress" : "stopped"}</p> */}
      <a
        className="btn btn--small"
        onClick={() => download(csvFile, filename)}
              href="#"
      >
        Download template
      </a>
      {/* <button onClick={() => cancel()}>Cancel the download</button>
      <p>Download size in bytes {size}</p>
      <label for="file">Downloading progress:</label>
      <progress id="file" value={percentage} max="100" />
      <p>Elapsed time in seconds {elapsed}</p>
      {error && <p>possible error {JSON.stringify(error)}</p>} */}
    </div>
  );
}
