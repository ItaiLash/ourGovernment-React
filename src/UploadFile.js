import React from "react";
import "./style_upload.css";
import FileDownloader from "./upload file components/FileDownloader";
import Footer from "./shared components/Footer";

function UploadFile() {
  return (
    <div class="container">
      <header>
        <div class="header-text-box">
          <h1>Electing the executive branch</h1>
          <p class="header-text"></p>
        </div>
      </header>

      <section>
        <div class="grid-4-rows">
          <figure class="option">
              <FileDownloader />
          </figure>

          <figure class="option">
            <div class="upload-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ques-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a href="#" class="btn btn--small">
                Upload File
              </a>
            </div>
          </figure>

          <figure class="option">
            <div class="run-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ques-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a href="#" class="btn btn--small">
                Download Template
              </a>
            </div>
          </figure>

          <figure class="option">
            <div class="download-res-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="ques-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <a href="#" class="btn btn--small">
                Download Results
              </a>
            </div>
          </figure>

          <figure class="stats">
            <div class="stats-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stat-icon"
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
              <a href="#" class="btn btn--small">
                Download Full Statistics
              </a>
            </div>
          </figure>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UploadFile;
