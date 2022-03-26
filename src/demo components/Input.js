import * as React from "react";
import {useEffect,useState}from "react";
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
      pav:{},
      
    };
  
    this.officesArr = [];
    this.candidatesArr = [];

    /*for Amichai*/
    this.randomOfficesArr = ["off1", "off2", "off3"];
    this.randomCandidatesArr = [["amichai", "itai"], ["aaa", "bbb"], ["ccc", "ddd"]];
    this.randomVoters = [["a", "c", "e"], ["a", "c", "f"], ["a", "d", "f"]];
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

  renderResult(result) {
    console.log(result);
    if (result.massage==='one or more fields missing') {
      return;
    }
      console.log("________________");
      this.setState(prevState => {
        let pav = Object.assign({}, prevState.pav); 
        pav.result = result.result;
        pav.massage=result.massage;                       
        return { pav };                             
      })
  
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
    fetch("http://127.0.0.1:8000/api/pav/0/compute_pav/",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {offices:this.officesArr,candidates:this.candidatesArr,voters:this.randomVoters}),
    })
    .then(resp => resp.json())
    .then(resp => this.renderResult(resp))
    // .then(resp => this.setState(prevState => {
    //   let pav = Object.assign({}, prevState.pav); 
    //   pav.result = resp;                        
    //   return { pav };                             
    // }))
    
    //}
  };

  func = () => {
    if (this.state.clickedNext) {
      console.log(this.officesArr);
      console.log(this.candidatesArr);
      console.log(this.state.pav.result);

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
        {/* {!this.state.clickedNext ? ( */}
        <OfficeBox
          clickedSubmit={this.state.clickedSubmit}
          numOfOffices={this.inputs.Offices}
          numOfCandidates={this.inputs.Candidates}
          clickedNext={this.state.clickedNext}
          officesArr={this.officesArr}
          candidatesArr={this.candidatesArr}
        />
        {/* ) : (
            <VoterBox data={this.inputs} />
        )} */}
        {JSON.stringify(this.state.pav.result)}
        <div>{this.renderNextClick()}</div>
        {this.func()}
      </div>
    );
    };
}
export default Input;