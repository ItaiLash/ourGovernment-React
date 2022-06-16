import * as React from "react";
import OfficeCard from "./OfficeCard";
import VoterCard from "./VoterCard";
import CollapsibleTable from "./CollapsTable";
import style from "./style_demo.module.css";
import Axios from 'axios';
import FileDownload from "js-file-download";
import Spinner from "../shared components/Spinner";

import {
  generateRandomOfficeName,
  generateRandomCandidatesName,
  generateRandomVotersName,
  generateRandomIdx,
} from "../constant/Random";

class FormBox extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedNext: false,
      clickedDone: false,
      clickedRandomOffice: false,
      clickedRandomVotes: false,

      renderResult: false,
      renderVoters: false,

      officeNumError: false,
      officeDiffNamesError: false,
      candidateDiffNamesError: false,
      candidateEmptyError: false,
      voterNumError: false,

      randOfficeName: "",
      randCandidatesName: "",
      randVotersName: "",
      randIdx: "",

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
          randomOffice={this.state.randOfficeName[i]}
          randomCandidates={this.state.randCandidatesName[i]}
        />
      );
    }
    return cp;
  };

  renderRandomOfficesBtn = () => {
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
    this.state.randOfficeName = generateRandomOfficeName(
      this.props.data.offices
    );
    this.state.randCandidatesName = generateRandomCandidatesName(
      this.props.data.offices,
      this.props.data.candidates
    );
  };

  renderRandomVotesBtn = () => {
    return (
      <a
        href="#"
        className={style.btnRandom}
        onClick={this.handleRandomVotesClick}
      >
        Random
      </a>
    );
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
          randomClicked={this.state.clickedRandomVotes}
          randomVoters={this.state.randVotersName[i]}
          randIdx={this.state.randIdx[i]}
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
    this.props.officesArr.length = 0;
    this.props.candidatesArr.length = 0;
    this.setState(({ clickedNext }) => ({ clickedNext: true }));
    await this.delay(2000);
    this.validateErrorOffice();
    this.validateErrorCandidates();
    if (
      !this.state.officeNumError &&
      !this.state.officeDiffNamesError &&
      !this.state.candidateDiffNamesError &&
      !this.state.candidateEmptyError
    ) {
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
    this.props.votersNamesArr.length = 0;
    this.setState(({ clickedDone }) => ({ clickedDone: true }));
    await this.delay(2000);
    this.validateErrorVoter();
    if (!this.state.voterNumError) {
      this.callToPav();
    }
  };

  renderRandomVotesBtn = () => {
    return (
      <a
        href="#"
        className={style.btnRandom}
        onClick={this.handleRandomVotesClick}
      >
        Random
      </a>
    );
  };

  handleRandomVotesClick = async (e) => {
    e.preventDefault();
    this.setState(({ clickedRandomVotes }) => ({ clickedRandomVotes: true }));
    this.state.randVotersName = generateRandomVotersName(
      this.props.data.voters
    );
    this.state.randIdx = generateRandomIdx(this.props.candidatesArr, this.props.data.voters);
  };

  renderTryAgainClick = () => {
    if (this.state.renderVoters) {
      return (
        <div>
          <a
            href="#"
            className={style.btnAgain}
            onClick={this.handlClickTryAgain}
          >
            Try Again
          </a>
          <a
            href="#"
            className={style.btnAgain}
            onClick={this.handlePDFDownload}
          >
            Learn more
          </a>
        </div>
      );
    }
  };

  /*
  |------------------------------------------------------------|
  |                     Errors Validations                     |
  |------------------------------------------------------------|
  */
  validateErrorOffice() {
    //(1)->check if all the office names filled
    let officeArrNew = this.props.officesArr.filter(function (string) {
      return string !== "";
    });
    this.setState(({ officeNumError }) =>
      officeArrNew.length === this.props.data.offices
        ? { officeNumError: false }
        : { officeNumError: true }
    );

    //(2)->check if there are different office names
    let uniqueOfficeArr = [...new Set(officeArrNew)];
    this.setState(({ officeDiffNamesError }) =>
      uniqueOfficeArr.length === this.props.data.offices
        ? { officeDiffNamesError: false }
        : { officeDiffNamesError: true }
    );
  }

  validateErrorCandidates() {
    let counter1 = 0; //(1)->check if there are different candidates for each office
    let counter2 = 0; //(2)->check if there is at least one candidate in each office 
    for (const x of this.props.candidatesArr) {
      let candidateArrNew = x.filter(function (string) {
        return string != "";
      });
      let uniqueCandidateArr = [...new Set(candidateArrNew)];
      if (uniqueCandidateArr.length < 1) {
        counter2++;
      }
      if (uniqueCandidateArr.length != candidateArrNew.length) {
        counter1++;
      }
    }
    let allCandidates = [].concat(...this.props.candidatesArr);
    allCandidates.filter(function (string) {
      return string != "";
    });
    let uniqueAllCandidates = [...new Set(allCandidates)];
    if (uniqueAllCandidates.length != allCandidates.length) {
      counter1++;
    }
    this.setState(({ candidateDiffNamesError }) => ({candidateDiffNamesError: counter1 > 0 ? true : false}));
    this.setState(({ candidateEmptyError }) => ({candidateEmptyError: counter2 > 0 ? true : false}));
  }

  validateErrorVoter() {
    //check if the voters names array is full
    let counter = 0;
    let votersNamesArrNew = this.props.votersNamesArr.filter(function (string) {
      return string != "";
    });
    this.setState(({ voterNumError }) =>
      votersNamesArrNew.length === this.props.data.voters
        ? { voterNumError: false }
        : { voterNumError: true }
    );
  }

  errorsFuncOffice() {
    if (this.state.officeNumError) {
      return (
        <div className={style.errorMessage}>
          Please fill in all the names of the offices
        </div>
      );
    } else if (this.state.officeDiffNamesError) {
      return (
        <div className={style.errorMessage}>
          Please choose different names for each office
        </div>
      );
    }
    else if (this.state.candidateDiffNamesError) {
      return (
        <div className={style.errorMessage}>
        Please choose different names for candidates 
        </div>
      );
    }
    else if (this.state.candidateEmptyError) {
      return (
        <div className={style.errorMessage}>
        Please fill out at least one candidate in each office 
        </div>
      );
    } 
  }

  errorsFuncVoter() {
    if (this.state.voterNumError) {
      return (
        <div className={style.errorMessage}>Please fill all voters names</div>
      );
    }
    else if(this.state.clickedDone){
      return (
        <Spinner/>
      );
    }
  }

  /*
  |------------------------------------------------------------|
  |                      Django Functions                      |
  |------------------------------------------------------------|
  */
  createData(officeName, canName, voters) {
    let details = [];
    for (const x of voters) {
      details.push({ voterName: x });
    }
    return {
      officeName,
      canName,
      details,
    };
  }

 
  myData() {
    let rows = [];
    for (let i = 0; i < this.props.data.offices; i++) {
      rows.push(
        this.createData(
          this.props.officesArr[i],
          this.state.pav.result[0][i],
          this.state.pav.result[1][i]
        )
      );
    }
    return rows;
  }

  resultHandler = () => {
    return <CollapsibleTable rows={this.myData()} />;
  };

  renderResultToScreen = () => {
    if (this.state.pav && this.state.clickedDone) {
      return (
        <div className={style.resultGrid}>
          <div>{this.resultHandler()}</div>
          <div>{this.renderTryAgainClick()}</div>
        </div>
      );
    }
  };

  handlClickTryAgain = async (e) => {
    e.preventDefault();
    window.location.reload();
  };

  ////////////////////////////////////////////////////////////
  validateResult(result) {
    console.log(result);
    if (result.massage === "one or more fields missing") {
      return;
    }
    this.setState((prevState) => {
      let pav = Object.assign({}, prevState.pav);
      pav.result = result.result;
      pav.massage = result.massage;
      return { pav };
    });
    this.setState(({ renderResult }) => ({ renderResult: true }));
  }

  /**
   * this finction is sending http post requst to the Django server api
   */
  callToPav = async () => {
    await fetch("https://our-government-server2.herokuapp.com/api/pav/0/compute_pav/", {
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
      .then((resp) => this.validateResult(resp));
  };

  handlePDFDownload = (e) => {
    e.preventDefault();
    Axios({
      url: "https://our-government-server2.herokuapp.com/api/pav/0/download_results/",
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      FileDownload(res.data, "explantion.html");
    });
  };s

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
            <div className={style.nextRandGrid}>
              <div>{this.renderNextClick()}</div>
              <div>{this.renderRandomOfficesBtn()}</div>
            </div>
          </div>
        ) : !this.state.renderResult ? (
          <div>
            <div className={style.formBox}>{this.renderVotersCards()}</div>
            <div>{this.errorsFuncVoter()}</div>
            <div className={style.nextRandGrid}>
              <div>{this.renderDoneClick()}</div>
              <div>{this.renderRandomVotesBtn()}</div>
            </div>
          </div>
        ) : (
          <div>
            {console.log(this.props.officesArr)}
            {console.log(this.props.candidatesArr)}
            {console.log(this.props.votersArr)}
            {console.log(this.props.votersNamesArr)}
            {this.renderResultToScreen()}
          </div>
        )}
      </div>
    );
  }
}
export default FormBox;
