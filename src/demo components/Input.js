import * as React from "react";
import {useEffect,useState}from "react";
import NumOfCandidatesSelect from "./NumOfCandidatesSelect";
import NumOfOfficesSelect from "./NumOfOfficesSelect";
import NumOfVotersSelect from "./NumOfVotersSelect";
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
      candidatesFilled : 0,
      pav:{},
      
    };
  
    this.officesArr = [];
    this.candidatesArr = [];
    this.votersArr = [];

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

  renderOfficeBox() {
    if (this.state.clickedSubmit) {
      
    }
  }

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


  /**
   * this finction is sending http post requst to the Django server api
   */
  callToPav = async  () =>{
   await fetch("http://127.0.0.1:8000/api/pav/0/compute_pav/",{
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
        {this.state.clickedSubmit ? (
          <OfficeBox
            clickedSubmit={this.state.clickedSubmit}
            numOfOffices={this.inputs.Offices}
            numOfCandidates={this.inputs.Candidates}
            officesArr={this.officesArr}
            candidatesArr={this.candidatesArr}
            callPav={this.callToPav}
            data={this.inputs}
          />
        ) : 
        null}
        {JSON.stringify(this.state.pav.result)}
      </div>
    );
    };
}
export default Input;