import * as React from "react";
import OfficeCard from "./OfficeCard";
import VoterCard from "./VoterCard";
import style from "./style_demo.module.css";
import Box from "@mui/material/Box";
import Axios from 'axios';
import FileDownload from "js-file-download";
import { generateRandomOfficeName } from "../constant/Random";

class FormBox extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedNext: false,
      clickedDone: false,
      clickedRandomOffice: false,
      renderResult: false,

      renderVoters: false,
      officeNumError: false,
      officeDiffNamesError: false,
      candidateDiffNamesError: false,
      candidateEmptyError: false,
      voterNumError: false,
      voterCandidateError: false,

      pav: {},
    };
  }

  /*
  |------------------------------------------------------------|
  |                        Office Card                         |
  |------------------------------------------------------------|
  */

  renderOfficeCards = () => {
    const cp = [];
    for (let i = 0; i < this.props.data.offices; i++) {
      cp.push(
        <OfficeCard
          key={`office${i}`}
          id={`office${i}`}
          numOfCandidates={this.props.data.candidates}
          numOfOffices={this.props.data.offices}
          officesArr={this.props.officesArr}
          candidatesArr={this.props.candidatesArr}
          index={i}
          nextClicked={this.state.clickedNext}
          randomClicked={this.state.clickedRandomOffice}
        />
      );
    }
    return cp;
  };

  renderRandomOffices = () => {
    return (
      <a
        href="#"
        className={style.btnRandom}
        onClick={this.handleRandomOfficesClick}
      >
        Random
      </a>
    );
  };

  handleRandomOfficesClick = async (e) => {
    e.preventDefault();
    this.setState(({ clickedRandomOffice }) => ({ clickedRandomOffice: true }));
  };
  
  /*
  |------------------------------------------------------------|
  |                        Voter Card                          |
  |------------------------------------------------------------|
  */

  renderVotersCards = () => {
    const cp = [];
    for (let i = 0; i < this.props.data.voters; i++) {
      cp.push(
        <VoterCard
          key={`voter${i}`}
          id={`voter${i}`}
          data={this.props.data}
          officesArr={this.props.officesArr}
          candidatesArr={this.props.candidatesArr}
          votersArr={this.props.votersArr}
          votersNamesArr={this.props.votersNamesArr}
          index={i}
          doneClicked={this.state.clickedDone}
        />
      );
    }
    return cp;
  };

  renderNextClick = () => {
    return (
      <a href="#" className={style.btnSubmit} onClick={this.handleNextClick}>
        Next
      </a>
    );
  };

  handleNextClick = async (e) => {
    e.preventDefault();
    // if (
    //   //check all offices and candidates filled corectly
    // ) {
    this.props.officesArr.length = 0;
    this.props.candidatesArr.length = 0;
    this.setState(({ clickedNext }) => ({ clickedNext: true }));
    await this.delay(2000);
    this.validateErrorOffice();
    this.validateErrorCandidates();
    // this.errorsFuncOffice();
    if (!this.state.officeNumError && !this.state.officeDiffNamesError && !this.state.candidateDiffNamesError && !this.state.candidateEmptyError) {
      this.setState(({ renderVoters }) => ({ renderVoters: true }));
    }
  };

  delay(number) {
    return new Promise((res) => setTimeout(res, number));
  }

  renderDoneClick = () => {
    if (this.state.renderVoters) {
      return (
        <a href="#" className={style.btnSubmit} onClick={this.handleDoneClick}>
          Done
        </a>
      );
    }
  };

  handleDoneClick = async (e) => {
    e.preventDefault();
    this.props.votersArr.length = 0;
    this.setState(({ clickedDone }) => ({ clickedDone: true }));
    await this.delay(2000);
    console.log("votersArr : " + this.props.votersArr);
    console.log("votersNames : " + this.props.votersNamesArr)
    this.validateErrorVoter();
    if (!this.state.voterNumError && !this.state.voterCandidateError) {
      this.setState(({ renderResult }) => ({ renderResult: true }));
    }
    this.callToPav();
  };

  renderTryAgainClick = () => {
    if (this.state.renderVoters) {
      return (
        <div>
          <a
            href="#"
            className={style.btnSubmit}
            onClick={this.handlClickTryAgain}
          >
            Try Again
          </a>
          <a
            href="#"
            className={style.btnSubmit}
            onClick={this.handlePDFDownload}
          >
            Learn more
          </a>
        </div>
      );
    }
  };

  // handlClickTryAgain = async (e) => {
  //   e.preventDefault();
  //   window.location.reload();
  // };

  /*
  |------------------------------------------------------------|
  |                     Errors Validations                     |
  |------------------------------------------------------------|
  */
  validateErrorOffice() {
    //(1)->check if all the office names filled
    let officeArrNew = this.props.officesArr.filter(function (string) {
      return string != "";
    });
    this.setState(({ officeNumError }) =>
      officeArrNew.length == this.props.data.offices
        ? { officeNumError: false }
        : { officeNumError: true }
    );

    //(2)->check if there are different office names
    let uniqueOfficeArr = [...new Set(officeArrNew)];
    this.setState(({ officeDiffNamesError }) =>
      uniqueOfficeArr.length == this.props.data.offices
        ? { officeDiffNamesError: false }
        : { officeDiffNamesError: true }
    );
  }

  validateErrorCandidates() {
    // console.log(this.props.candidatesArr);
    let counter1=0; //(1)->check if there are different candidates for each office
    let counter2=0; //(2)->check if there is at least one candidate in each office 
    for(const x of this.props.candidatesArr){
      let candidateArrNew = x.filter(function (string) {
        return string != "";
      });
      let uniqueCandidateArr = [...new Set(candidateArrNew)];
      if(uniqueCandidateArr < 1){
        counter2++;
      }
      if(uniqueCandidateArr.length != candidateArrNew.length){
          counter1++;
      }
    }
    
    // let allCandidates = flatten(this.props.candidatesArr);
    // allCandidates.filter(function (string) {
    //   return string != "";
    // });
    // uniqueAllCandidates =  [...new Set(allCandidates)];
    // if(uniqueAllCandidates.length == allCandidates.length){
    //   counter1++;
    // }
    // console.log(counter1);
    if (counter1 > 0) {
      this.setState(({ candidateDiffNamesError }) => ({ candidateDiffNamesError: true }));
    }
    else{
      this.setState(({ candidateDiffNamesError }) => ({ candidateDiffNamesError: false }));
    }
    if(counter2 > 0){
      this.setState(({ candidateEmptyError }) => ({ candidateEmptyError: true }));
    }
    else{
      this.setState(({ candidateEmptyError }) => ({ candidateEmptyError: false }));
    }
  }

  validateErrorVoter() {
    //(1)->check if the voters names array is full
    let counter = 0;
    this.setState(({ voterNumError }) =>
    this.props.votersNamesArr.length == this.props.data.voters
        ? { voterNumError: false }
        : { voterNumError: true }
    );
    //(2)->check if each voter choose candidate for each office
    console.log("votersArr : " + this.props.votersArr);
    console.log("votersNames : " + this.props.votersNamesArr)
    for(const x of this.props.votersArr){
      if(x.length < 1){
        counter++;
      }
    }
    this.setState(({ voterCandidateError }) =>
    counter > 0
        ? { voterCandidateError: true }
        : { voterCandidateError: false }
    );
  }

  errorsFuncOffice() {
    if (this.state.officeNumError) {
      return (
        <div className={style.errorMessage}>
          Fill in all the names of the offices
        </div>
      );
    } else if (this.state.officeDiffNamesError) {
      return (
        <div className={style.errorMessage}>
          Choose different names for each office
        </div>
      );
    }
  }

  errorsFuncCandidates() {
    if (this.state.candidateDiffNamesError) {
      return (
        <div className={style.errorMessage}>
          Choose different names for candidates 
        </div>
      );
    }
    else if (this.state.candidateEmptyError) {
      return (
        <div className={style.errorMessage}>
          Fill out at least one candidate in each office 
        </div>
      );
    } 
  }

  errorsFuncVoter() {
    if (this.state.voterNumError) {
      return (
        <div className={style.errorMessage}>
          please fill all voters names 
        </div>
      );
    }
    else if (this.state.voterCandidateError) {
      return (
        <div className={style.errorMessage}>
          each voter need to choose candidate for each office
        </div>
      );
    }

    // else if(this.state.voterDiffNamesError){
    //   console.log("in");
    //   return(
    //     <section className={style.section}>
    //     <figure className={style.option} >
    //       <div className={style.optionBox}>
    //         <p className={style.cardDescription}>
    //         Choose different names for each voter
    //         </p>
    //       </div>
    //     </figure>
    //   </section>
    //   )
    // }
  }

  /*
  |------------------------------------------------------------|
  |                      Django Functions                      |
  |------------------------------------------------------------|
  */
  resultHandler = () => {
    const cp = [];
    let result = "";
    const temp = String(this.state.pav.result);
    // temp=temp.slice(1).slice(0, temp.length - 1)
    for (var i = 0; i < temp.length; i++) {
      if (temp.charAt(i) != '"') {
        if (
          (temp.charAt(i) == "\\" && temp.charAt(i + 1) == "n") ||
          (temp.charAt(i - 1) == "\\" && temp.charAt(i) == "n")
        ) {
          if (temp.charAt(i - 1) == "\\" && temp.charAt(i) == "n") {
            cp.push(
              <Box
                component="span"
                sx={{
                  display: "block",
                  p: 1,
                  m: 1,
                  bgcolor: (theme) =>
                    theme.palette.mode === "dark" ? "#101010" : "#fff",
                  color: (theme) =>
                    theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                  border: "1px solid",
                  borderColor: (theme) =>
                    theme.palette.mode === "dark" ? "grey.800" : "grey.300",
                  borderRadius: 2,
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                {result.slice()}
              </Box>
            );
            result = "";
          }
          continue;
        }
        result += temp.charAt(i);
      }
    }
    return cp;
  };
  renderResultToScreen = () => {
    if (this.state.pav && this.state.clickedDone) {
      return (
        <section className={style.section}>
          <div className={style.resultGrid}>
            <div>{this.resultHandler()}</div>
            <div>{this.renderTryAgainClick()}</div>
          </div>
        </section>
      );
    }
    return null;
  };

  handClickDone = async (e) => {
    e.preventDefault();
    this.props.votersArr.length = 0;
    this.setState(({ clickedDone }) => ({ clickedDone: true }));
    await this.delay(5000);
    // this.validateErrorVoter();
    if(!this.state.voterNumError && !this.state.voterCandidateError){
      this.setState(({ renderResult }) => ({ renderResult: true }));
    }
    this.callToPav();
  };

  handlClickTryAgain = async (e) => {
    e.preventDefault();
    window.location.reload();
  };

  ////////////////////////////////////////////////////////////
  renderResult(result) {
    console.log(result);
    if (result.massage === "one or more fields missing") {
      return;
    }
    console.log("________________");
    this.setState((prevState) => {
      let pav = Object.assign({}, prevState.pav);
      pav.result = result.result;
      pav.massage = result.massage;
      return { pav };
    });
  }

  /**
   * this finction is sending http post requst to the Django server api
   */
  callToPav = async () => {
    await fetch("http://127.0.0.1:8000/api/pav/0/compute_pav/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        offices: this.props.officesArr,
        candidates: this.props.candidatesArr,
        voters: this.props.votersArr,
        votersNames: this.props.votersNamesArr,
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => this.renderResult(resp));
    // .then(resp => this.setState(prevState => {
    //   let pav = Object.assign({}, prevState.pav);
    //   pav.result = resp;
    //   return { pav };
    // }))
  };

  handlePDFDownload = (e) => {
    e.preventDefault();
    Axios({
      url: "http://127.0.0.1:8000/api/pav/0/download_results/",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data,"explantion.html")
    })
 
  };

  /*
  |------------------------------------------------------------|
  |                          Render                            |
  |------------------------------------------------------------|
  */
  render() {
    return (
      <div>
        {!this.state.renderVoters && !this.state.renderResult ? (
          <div>
            <div className={style.formBox}>{this.renderOfficeCards()}</div>
            <div>{this.errorsFuncOffice()}</div>
            <div>{this.errorsFuncCandidates()}</div>
            <div className={style.nextRandGrid}>
              <div>{this.renderNextClick()}</div>
              <div>{this.renderRandomOffices()}</div>
            </div>
          </div>
        ) : !this.state.renderResult ? (
          <div>
            <div className={style.formBox}>{this.renderVotersCards()}</div>
            <div>{this.errorsFuncVoter()}</div>
            <div>{this.renderDoneClick()}</div>
          </div>
        ) : (
          <div>
            {console.log(this.props.officesArr)}
            {console.log(this.props.candidatesArr)}
            {console.log(this.props.votersArr)}
            {console.log(this.props.votersNamesArr)}
            <div>{this.renderResultToScreen()}</div>
            {/* <div>{this.renderTryAgainClick()}</div> */}
          </div>
        )}
      </div>
    );
  }
}
export default FormBox;
