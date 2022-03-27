import * as React from "react";
import style from "./style_demo.module.css";
import VoterBox from "./VoterBox";
import OfficeBox from "./OfficeBox";

class FormBox extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedNext: false,
      renderVoters: false,
    };
  }

  renderOfficeCards = () => {
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
            nextClicked={this.state.clickedNext}
          />
        );
      }
      return cp;
    }
  };

  renderNextClick = () => {
    if (this.props.clickedSubmit) {
      return (
        <a href="#" className={style.btnSubmit} onClick={this.handClickNext}>
          Next
        </a>
      );
    }
  };

  handClickNext = async (e) => {
    e.preventDefault();
    // if (
    //   //check all offices and candidates filled corectly
    // ) {
    this.props.officesArr.length = 0;
    this.props.candidatesArr.length = 0;
    this.setState(({ clickedNext }) => ({ clickedNext: true }));
    await this.delay(5000);
    this.setState(({ renderVoters }) => ({ renderVoters: true }));
    this.props.callToPav();
  };

  delay(number) {
    return new Promise((res) => setTimeout(res, number));
  }

  func = () => {
    if (this.state.clickedNext) {
      console.log(this.props.officesArr);
      console.log(this.props.candidatesArr);
      // console.log(this.props.state.pav.result);
    }
  };

  render() {
    return (
      <div>
        {!this.state.renderVoters ? (
          <div className={style.allOffices}>{this.renderOfficeCards()}</div>
        ) : (
          <div>
            {console.log("swap")}
            <VoterBox
              data={this.props.data}
              officesArr={this.props.officesArr}
              candidatesArr={this.props.candidatesArr}
            />
            {console.log(this.props.officesArr)}
          </div>
        )}
        <div>{this.renderNextClick()}</div>
        {this.func()}
      </div>
    );
  }
}
export default FormBox;
