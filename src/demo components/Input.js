import * as React from "react";
import NumOfCandidatesSelect from "./NumOfCandidatesSelect";
import NumOfOfficesSelect from "./NumOfOfficesSelect";
import NumOfVotersSelect from "./NumOfVotersSelect";
import OfficeCard from "./OfficeCard";
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
      clicked: false,
    };
  }

  pull_data = (name, data) => {
    this.inputs[name] = data;
    console.log(this.inputs);
  };

  handClick = (e) => {
    e.preventDefault();
    if (this.inputs.Offices > 0 && this.inputs.Candidates > 0 && this.inputs.Voters > 0) {
      this.setState(({ clicked }) => ({ clicked: true }));
    }
  };

  renderClick = () => {
    const cp = [];
    if (this.state) {
      for (let i = 1; i <= this.inputs.Offices; i++) {
        cp.push(<OfficeCard id={`office${i}`} data={this.inputs.Candidates} />);
      }
      return cp;
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
        <div className={style.allOffices}>{this.renderClick()}</div>
      </div>
    );
  }
}
export default Input;