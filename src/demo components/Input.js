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
          <FormBox
            clickedSubmit={this.state.clickedSubmit}
            officesArr={this.officesArr}
            candidatesArr={this.candidatesArr}
            votersArr={this.votersArr}
            callPav={this.callToPav}
            data={this.inputs}
          />
        ) : null}
        {JSON.stringify(this.state.pav.result)}
      </div>
    );
    };
}
export default Input;