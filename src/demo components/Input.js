import * as React from "react";
import NumOfCandidatesSelect from "./NumOfCandidatesSelect";
import NumOfOfficesSelect from "./NumOfOfficesSelect";
import NumOfVotersSelect from "./NumOfVotersSelect";
import FormBox from "./FormBox";
import style from './style_demo.module.css'

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
      error: false,
    };
  
    this.officesArr = [];
    this.candidatesArr = [];
    this.votersArr = [];
  }

  pull_data = (name, data) => {
    this.inputs[name] = data;
  };

  handClick = (e) => {
    e.preventDefault();
    if (
      this.inputs.offices > 0 &&
      this.inputs.candidates > 0 &&
      this.inputs.voters > 0
    ) {
      this.setState(({ error }) => ({ error: false }));
      this.setState(({ clickedSubmit }) => ({ clickedSubmit: true }));
    }
    else{
      this.setState(({ error }) => ({ error: true }));
      this.setState(({ clickedSubmit }) => ({ clickedSubmit: false }));
    }
  };

  errorsFunc(){
    if(this.state.error){
      return(
          <div className={style.errorMessage}>
            Please fill in all the options
          </div>
      )
    }
    else{
      return null;
    }
  }
  
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
        <div>{this.errorsFunc()}</div>
        {this.state.clickedSubmit ? (
          <FormBox
            clickedSubmit={this.state.clickedSubmit}
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
    };
  }
export default Input;