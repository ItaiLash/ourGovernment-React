import React from "react";
import style from "./style_demo.module.css";


function Paragraph() {
  return (
    <p className={style.headerText}>
      The executive branch, or government, is typically not elected directly by
      the people, but rather formed by another elected body or person such as
      the parliament or the president.
      <br />
      As a result, it's members are not directly accountable to the people,
      individually or as a group.
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