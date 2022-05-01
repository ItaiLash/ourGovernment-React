import React, { useState } from "react";
import Icon from "./Icon";
import style from "./style_upload.module.css";
import Axios from 'axios';
import FileDownload from "js-file-download";

export default function  FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
    handleSubmission();
  };

  const handleSubmission = () => {
    const uploadData =new FormData();
    uploadData.append('pav_file',selectedFile,selectedFile.name);
    fetch("http://127.0.0.1:8000/api/pav/0/upload_file/", {
      method : 'POST',
      body: uploadData
    })
    .then((resp) => resp.json())
    .then(res => downloadReuslt(res))
  };

  const downloadReuslt = (result) => {
    console.log(result);
    if (result.massage === "failed") {
      return;
    }
    handleCsvDownload();
  
  }

  const handleCsvDownload = () => {
    // e.preventDefault()
    Axios({
      url:"http://127.0.0.1:8000/api/pav/0/download_results_csv/",
      method:"GET",
      responseType:"blob"
    }).then((res) => {
      FileDownload(res.data,"result.csv")
    })
 
  };

  return (
    <div>
      <div className={style.uploadGgrid}>
      {/* <Icon /> */}
      <a href="#" className={style.btn} onClick={handleSubmission}>
                Upload File
      </a>
      {/* <div> */}
      <input type="file"  onChange={changeHandler}/>
      {/* </div> */}
      </div>
    </div>
  );
}
