import * as React from "react";
import OfficeCard from "./OfficeCard";
import style from "./style_demo.module.css";

class OfficeBox extends React.Component {
  constructor() {
      super();
  }

  renderOfficeBox = () => {
    const cp = [];
    if (this.props.clickedSubmit) {
      for (let i = 0; i < this.props.numOfOffices; i++) {
        cp.push(
          <OfficeCard
            key={`office${i}`}
            id={`office${i}`}
            numOfCandidates={this.props.numOfCandidates}
            officesArr={this.props.officesArr}
            candidatesArr={this.props.candidatesArr}
            index={i}
            nextClicked={this.props.clickedNext}
          />
        );
      }
      return cp;
    }
  };


  render() {
      return (
          <div className={style.allOffices}>{this.renderOfficeBox()}</div>
      );
  }
}
export default OfficeBox;
