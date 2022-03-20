import React from "react";
import style from "./style_demo.module.css";

function Paragraph() {
    return (
      <div>
        <table style="width: 100%">
          <colgroup>
            <col span="1" style="width: 15%" />
            <col span="1" style="width: 70%" />
            <col span="1" style="width: 15%" />
          </colgroup>
          <thead>
            <tr>
              <th className="office--th">Office #1</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody id="office-0">
            <tr id="office-0-name">
              <td>Office Name</td>
              <td data-title="Office Name">
                <input
                  id="office_name_0"
                  name="office-names[0]"
                  type="text"
                  class="office-input"
                />
              </td>
              <td id="office-delete-0">
                <a className="btn-remove-office" href="#" title="Remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    class="trash-icon"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="216"
                      y1="56"
                      x2="40"
                      y2="56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="104"
                      y1="104"
                      x2="104"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="152"
                      y1="104"
                      x2="152"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <path
                      d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                    <path
                      d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr id="office-0-candidates">
              <td>
                Candidates' Names
                <br />
                (comma-separated)
              </td>
              <td data-title="Office Candidates">
                <textarea
                  className="candidates-input"
                  name="office-candidates[0]"
                  cols="40"
                  rows="2"
                ></textarea>
              </td>
              <td id="candidates-delete-0">
                <a className="btn-remove-candidates" href="#" title="Remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="trash-icon"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="216"
                      y1="56"
                      x2="40"
                      y2="56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="104"
                      y1="104"
                      x2="104"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="152"
                      y1="104"
                      x2="152"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <path
                      d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                    <path
                      d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <table style="width: 100%">
          <colgroup>
            <col span="1" style="width: 15%" />
            <col span="1" style="width: 70%" />
            <col span="1" style="width: 15%" />
          </colgroup>
          <thead>
            <tr>
              <th className="office--th">Office #2</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody id="office-0">
            <tr id="office-0-name">
              <td>Office Name</td>
              <td data-title="Office Name">
                <input
                  id="office_name_0"
                  name="office-names[0]"
                  type="text"
                  className="office-input"
                />
              </td>
              <td id="office-delete-0">
                <a className="btn-remove-office" href="#" title="Remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="trash-icon"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="216"
                      y1="56"
                      x2="40"
                      y2="56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="104"
                      y1="104"
                      x2="104"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="152"
                      y1="104"
                      x2="152"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <path
                      d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                    <path
                      d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
            <tr id="office-0-candidates">
              <td>
                Candidates' Names
                <br />
                (comma-separated)
              </td>
              <td data-title="Office Candidates">
                <textarea
                  className="candidates-input"
                  name="office-candidates[0]"
                  cols="40"
                  rows="2"
                ></textarea>
              </td>
              <td id="candidates-delete-0">
                <a className="btn-remove-candidates" href="#" title="Remove">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="192"
                    height="192"
                    fill="#000000"
                    viewBox="0 0 256 256"
                    className="trash-icon"
                  >
                    <rect width="256" height="256" fill="none"></rect>
                    <line
                      x1="216"
                      y1="56"
                      x2="40"
                      y2="56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="104"
                      y1="104"
                      x2="104"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <line
                      x1="152"
                      y1="104"
                      x2="152"
                      y2="168"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></line>
                    <path
                      d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                    <path
                      d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
                      fill="none"
                      stroke="#000000"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="16"
                    ></path>
                  </svg>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <a href="#" className="btn-add-office">
          Add Office
        </a>
      </div>
    );
}

export default Paragraph;
