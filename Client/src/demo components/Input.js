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
      error: false,
      numOfOffices: "",
      numOfCandidates: "",
      numOfVoters: "",
    };

    this.officesArr = [];
    this.candidatesArr = [];
    this.votersArr = [];
    this.votersNamesArr = [];
  }

  push_data = (name, data) => {
    this.inputs[name] = data;
  };

  handSubmitClick = (e) => {
    e.preventDefault();
    this.push_data("offices", this.state.numOfOffices);
    this.push_data("candidates", this.state.numOfCandidates);
    this.push_data("voters", this.state.numOfVoters);

    console.log(this.inputs);
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
  
  handRandomClick = (e) => {
    e.preventDefault();
    this.setState(({ numOfOffices }) => ({ numOfOffices: random(1, 10) }));
    this.setState(({ numOfCandidates }) => ({
      numOfCandidates: random(1, 10),
    }));
    this.setState(({ numOfVoters }) => ({ numOfVoters: random(1, 20) }));
  };

  handleNumOfOfficesChange = (event) => {
    this.setState(({ numOfOffices }) => ({ numOfOffices: event.target.value }));
  };

  handleNumOfCandidatesChange = (event) => {
    this.setState(({ numOfCandidates }) => ({
      numOfCandidates: event.target.value,
    }));
  };

  handleNumOfVotersChange = (event) => {
    this.setState(({ numOfVoters }) => ({ numOfVoters: event.target.value }));
  };

  render() {
    return (
      <div className={style.input}>
        <section className={style.section}>
          <div className={style.inputGrid}>
            <NumOfOfficesSelect
              handleChange={this.handleNumOfOfficesChange}
              numOfOffices={this.state.numOfOffices}
            />
            <NumOfCandidatesSelect
              handleChange={this.handleNumOfCandidatesChange}
              numOfCandidates={this.state.numOfCandidates}
            />
            <NumOfVotersSelect
              handleChange={this.handleNumOfVotersChange}
              numOfVoters={this.state.numOfVoters}
            />
            <a
              href="#"
              className={style.btnSubmit}
              onClick={this.handSubmitClick}
            >
              Submit
            </a>
            
            {/*demo input */
            /* <a
              href="#"
              className={style.btnRandom}
              onClick={this.handRandomClick}
            >
              Random
            </a> */}
          </div>
        </section>
        <div>{this.errorsFunc()}</div>
        {this.state.clickedSubmit ? (
          <FormBox
            officesArr={this.officesArr}
            candidatesArr={this.candidatesArr}
            votersArr={this.votersArr}
            votersNamesArr={this.votersNamesArr}
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