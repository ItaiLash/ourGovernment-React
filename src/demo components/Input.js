import * as React from "react";
import NumOfCandidatesSelect from "./NumOfCandidatesSelect";
import NumOfOfficesSelect from "./NumOfOfficesSelect";
import NumOfVotersSelect from "./NumOfVotersSelect";
import OfficeCard from "./OfficeCard";
import VoterBox from "./VoterBox";
import OfficeBox from "./OfficeBox";
import style from './style_demo.module.css'


class Input extends React.Component {
  constructor() {
    super();
    this.inputs = {
      Offices: 0,
      Candidates: 0,
      Voters: 0,
    };
    this.state = {
      clickedSubmit: false,
      clickedNext: false,
      candidatesFilled : 0,
    };
  

    this.officesArr = [];
    this.candidatesArr = [];

    /*for Amichai*/
    this.randomOfficesArr = ["off1", "off2", "off3"];
    this.randomCandidatesArr = [["amichai", "itai"], ["aaa", "bbb"], ["ccc", "ddd"]];
    this.randomVoters = [["amichai", "aaa", "ddd"], ["itai", "bbb", "ccc"], ["itai", "bbb", "ccc"]];
  }

  setCandidatesFilled = () => {
      this.setState(({ candidatesFilled : this.state.candidatesFilled+1 }));
  }


  pull_data = (name, data) => {
    this.inputs[name] = data;
  };

  handClick = (e) => {
    e.preventDefault();
    if (
      this.inputs.Offices > 0 &&
      this.inputs.Candidates > 0 &&
      this.inputs.Voters > 0
    ) {
      this.setState(({ clickedSubmit }) => ({ clickedSubmit: true }));
    }
  };


  renderNextClick = () => {
    if (this.state.clickedSubmit) {
      return (
        <a
          href="#"
          className={style.btnSubmit}
          onClick={this.handClickNext}
        >
          Next
        </a>
      );
    }
  };

  handClickNext = (e) => {
    e.preventDefault();
    // if (
    //   //check all offices and candidates filled corectly
    // ) {
    this.setState(({ clickedNext }) => ({ clickedNext: true }));
    //}
  };

  func = () => {
    if (this.state.clickedNext) {
      console.log(this.officesArr);
      console.log(this.candidatesArr);
    }
  };
  

  render() {
    return (
      <div>
        <section className={style.section}>
          <div className={style.inputGrid}>
            <NumOfOfficesSelect func={this.pull_data} />
            <NumOfCandidatesSelect func={this.pull_data} />
            <NumOfVotersSelect func={this.pull_data} />
            <a href="#" className={style.btnSubmit} onClick={this.handClick}>
              Submit
            </a>
          </div>
        </section>
        {!this.state.clickedNext ? (
        <OfficeBox
          clickedSubmit={this.state.clickedSubmit}
          numOfOffices={this.inputs.Offices}
          numOfCandidates={this.inputs.Candidates}
          clickedNext={this.state.clickedNext}
          officesArr={this.officesArr}
          candidatesArr={this.candidatesArr}
        />
        ) : (
            <VoterBox data={this.inputs} />
        )}
        <div>{this.renderNextClick()}</div>
        {this.func()}
      </div>
    );
    };
}
export default Input;