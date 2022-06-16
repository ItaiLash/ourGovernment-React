import React, { useState } from "react";
import style from "./style_upload.module.css";
import Axios from 'axios';
import FileDownload from "js-file-download";

export default function FileUploadPage() {
  const [fillTemplate, setFillTemplate] = React.useState(false);
  const [uploadClicked, setUploadClicked] = React.useState(false);
  const [resultsClicked, setResultsClicked] = React.useState(false);
  const completeFillTemplate = fillTemplate ? style.taskCompleted : "";
  const completeTemplateUpload = uploadClicked ? style.taskCompleted : "";
  const completeResults = resultsClicked ? style.taskCompleted : "";
  const uncompleteResults = resultsClicked==="error" ? style.taskError : "";

  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const hiddenFileInput = React.useRef(null);

  const handleUploadFileClick = (event) => {
    hiddenFileInput.current.click();
    setUploadClicked(true);
  };

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePicked(true);
  };

  const getExtension =(filename) =>{
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }
  
  const handleSubmission = () => {
    const uploadData = new FormData();
    if (selectedFile == undefined) {
      alert("Please upload the aproprate file before running the algorithm");
      setResultsClicked("error");
      return;
    }
    var fileType = getExtension(selectedFile.name)
    if(fileType !== "xlsx"){
      alert(fileType.toUpperCase() + " files are unsupported, use only .xlsx")
      setResultsClicked("error");
      return;
    }
    uploadData.append('pav_file',selectedFile,selectedFile.name);
    fetch( "https://our-government-server2.herokuapp.com/api/pav/0/upload_file/",{
        method: "POST",
        body: uploadData,
      }
    )
      .then((resp) => resp.json())
      .then((res) => downloadReuslt(res));
  };

  const downloadReuslt = (result) => {
    console.log(result);
    if (result.massage !== "Success") {
      alert(result.massage);
      setResultsClicked("error");
      return;
    }
    handleCsvDownload();
  }

  const handleCsvDownload = () => {
    Axios({
      url: "https://our-government-server2.herokuapp.com/api/pav/0/download_results_csv/",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "result.csv");
    });
    if (uploadClicked) setResultsClicked(true);
  };

  return (
    <div>
      <section className={`${style.downloadTemBox} ${completeFillTemplate}`}>
        <p className={style.step}>STEP #2</p>
        <div className={style.stepParaWraper}>
          <p className={style.stepPara}>
            Fill the template with offices, candidates and voters as your wish
          </p>
        </div>
        <a
          href="javascript:void(0)"
          className={style.btnGetRes}
          onClick={() => setFillTemplate(true)}
        >
          Done
        </a>
      </section>
      <section className={`${style.downloadTemBox} ${completeTemplateUpload}`}>
        <p className={style.step}>STEP #3</p>
        <div className={style.stepParaWraper}>
          <p className={style.stepPara}>
            Upload the updated template file to our server
          </p>
        </div>
        <a
          href="javascript:void(0)"
          className={style.btnGetRes}
          onClick={handleUploadFileClick}
        >
          Upload File
        </a>
        <input
          className={style.fileUp}
          type="file"
          onChange={changeHandler}
          style={{ display: "none" }}
          ref={hiddenFileInput}
        />
      </section>
      <section
        className={`${style.downloadTemBox} ${completeResults} ${uncompleteResults}`}
      >
        <p className={style.step}>STEP #4</p>
        <div className={style.stepParaWraper}>
          <p className={style.stepPara}>
            Run the algorithm and get your results
          </p>
        </div>
        <a
          href="javascript:void(0)"
          className={style.btnGetRes}
          onClick={handleSubmission}
        >
          Get Result
        </a>
      </section>
    </div>
  );
}
