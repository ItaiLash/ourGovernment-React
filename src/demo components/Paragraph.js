import React from "react";
import style from "./style_demo.module.css";


function Paragraph() {
  return (
    <p className={style.headerText}>
      <br />
      Here you can create your own government by using the GreedyPAV algorithm (greedy variant of Proportional Approval Voting).
      <br />
      It is fast and easy to use, all you need to do is to fill all the details.
      <br />
      After you got the results you'll have the opportunity to understand the results and to dive dipper to the Greedy PAV algorithm, just click on the "learn more" button.
      <br />
    </p>
  );
}

export default Paragraph;