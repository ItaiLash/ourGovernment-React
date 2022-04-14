import React, { useState } from "react";
import Icon from "./Icon";
import style from "./style_upload.module.css";

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
    .then(res => console.log(res))
  };

  return (
    <div>
      <div>
      <Icon />
      <input type="file" className={style.btn} onChange={changeHandler} />
      <a href="#" className={style.btn} onClick={handleSubmission}>
                Upload File
              </a>

      
      </div>
    </div>
  );
}
