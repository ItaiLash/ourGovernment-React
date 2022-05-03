import * as React from "react";
import NumOfCandidatesSelect from "./NumOfCandidatesSelect";
import NumOfOfficesSelect from "./NumOfOfficesSelect";
import NumOfVotersSelect from "./NumOfVotersSelect";
import FormBox from "./FormBox";
import style from './style_demo.module.css';
import { random } from "../constant/Random";

class Input extends React.Component {
  constructor() {
    super();

    this.inputs = {
      offices: 0,
      candidates: 0,
      voters: 0,
    };

    this.state = {
      clickedSubmit: false,
      clickedRandom: false,
    };

    this.officesArr = [];
    this.candidatesArr = [];
    this.votersArr = [];
  }

  pull_data = (name, data) => {
    this.inputs[name] = data;
  };

  handSubmitClick = (e) => {
    e.preventDefault();
    if (
      this.inputs.offices > 0 &&
      this.inputs.candidates > 0 &&
      this.inputs.voters > 0
    ) {
      this.setState(({ clickedSubmit }) => ({ clickedSubmit: true }));
    }
  };

  handRandomClick = (e) => {
    e.preventDefault();
    this.setState(({ clickedRandom }) => ({ clickedRandom: true }));
  };

  render() {
    return (
      <div className={style.input}>
        <section className={style.section}>
          <div className={style.inputGrid}>
            <NumOfOfficesSelect
              func={this.pull_data}
              rand={this.state.clickedRandom}
            />
            <NumOfCandidatesSelect func={this.pull_data} />
            <NumOfVotersSelect func={this.pull_data} />
            <a
              href="#"
              className={style.btnSubmit}
              onClick={this.handSubmitClick}
            >
              Submit
            </a>
            <a
              href="#"
              className={style.btnRandom}
              onClick={this.handRandomClick}
            >
              Random
            </a>
          </div>
        </section>
        {this.state.clickedSubmit ? (
          <FormBox
            officesArr={this.officesArr}
            candidatesArr={this.candidatesArr}
            votersArr={this.votersArr}
            callPav={this.callToPav}
            pav={this.state.pav}
            data={this.inputs}
          />
        ) : null}
      </div>
    );
  }
}
export default Input;