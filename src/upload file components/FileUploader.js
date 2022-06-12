import React, { useState } from "react";
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
  const getExtension =(filename) =>{
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }
  
  const handleSubmission = () => {
    const uploadData = new FormData();
    var fileType = getExtension(selectedFile.name)
    if(fileType !== "xlsx"){
      console.log(fileType + " is unsupported only .xlsx")
      return;
    }
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
    if (result.massage !== "Success") {
      console.log(result.massage)
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
      <section className={style.downloadTemBox}>
        <p className={style.step}>STEP #2</p>
        <div className={style.stepParaWraper2}>
          <p className={style.stepPara}>
            Fill the template with offices, candidates and voters as your wish
          </p>
        </div>
      </section>
      <section className={style.downloadTemBox}>
        <p className={style.step}>STEP #3</p>
        <div className={style.stepParaWraper}>
          <p className={style.stepPara}>
            Upload the updated template file to our server
          </p>
        </div>
        <input className={style.fileUp} type="file" onChange={changeHandler} />
      </section>
      <section className={style.downloadTemBox}>
        <p className={style.step}>STEP #4</p>
        <div className={style.stepParaWraper}>
          <p className={style.stepPara}>
            Run the algorithm and get your results
          </p>
        </div>
        <a href="#" className={style.btnGetRes} onClick={handleSubmission}>
          Get Result
        </a>
      </section>
    </div>
  );
}
