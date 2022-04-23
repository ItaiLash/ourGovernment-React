import * as React from "react";
import OfficeCard from "./OfficeCard";
import VoterCard from "./VoterCard";
import style from "./style_demo.module.css";


class FormBox extends React.Component {
  constructor() {
    super();

    this.state = {
      clickedNext: false,
      clickedDone: false,
      renderResult: false,

      renderVoters: false,
      

      pav: {},
    };
  }

  renderOfficeCards = () => {
    const cp = [];
    if (this.props.clickedSubmit) {
      for (let i = 0; i < this.props.data.offices; i++) {
        cp.push(
          <OfficeCard
            key={`office${i}`}
            id={`office${i}`}
            numOfCandidates={this.props.data.candidates}
            officesArr={this.props.officesArr}
            candidatesArr={this.props.candidatesArr}
            index={i}
            nextClicked={this.state.clickedNext}
          />
        );
      }
      return cp;
    }
  };

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
          index={i}
          doneClicked={this.state.clickedDone}
        />
      );
    }
    return cp;
  };

  renderResultToScreen = () => {
    if (this.state.pav && this.state.clickedDone){
      return(
        <div>
          {JSON.stringify(this.state.pav.result)}
        </div>
      )
    }
    return null;
  };

  renderNextClick = () => {
    if (this.props.clickedSubmit) {
      return (
        <a href="#" className={style.btnSubmit} onClick={this.handClickNext}>
          Next
        </a>
      );
    }
  };

  handClickNext = async (e) => {
    e.preventDefault();
    // if (
    //   //check all offices and candidates filled corectly
    // ) {
    this.props.officesArr.length = 0;
    this.props.candidatesArr.length = 0;
    this.setState(({ clickedNext }) => ({ clickedNext: true }));
    await this.delay(5000);
    this.setState(({ renderVoters }) => ({ renderVoters: true }));
  };

  delay(number) {
    return new Promise((res) => setTimeout(res, number));
  }

  renderDoneClick = () => {
    if (this.props.clickedSubmit && this.state.renderVoters) {
      return (
        <a href="#" className={style.btnSubmit} onClick={this.handClickDone}>
          Done
        </a>
      );
    }
  };

  handClickDone = async (e) => {
    e.preventDefault();
    // if (
    //   //check all voters selections
    // ) {
    this.props.votersArr.length = 0;
    this.setState(({ clickedDone }) => ({ clickedDone: true }));
    await this.delay(5000);
    this.setState(({ renderResult }) => ({ renderResult: true }));
    this.callToPav();
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
  ////////////////////////////////////////////////////////////


  render() {
    return (
      <div>
        {!this.state.renderVoters && !this.state.renderResult ? (
          <div>
            <div className={style.formBox}>{this.renderOfficeCards()}</div>
            <div>{this.renderNextClick()}</div>
          </div>
        ) : !this.state.renderResult ? (
          <div>
            <div className={style.formBox}>{this.renderVotersCards()}</div>
            <div>{this.renderDoneClick()}</div>
          </div>
        ) : (
          <div>
          <div className={style.formBox}>{this.renderResultToScreen()}</div>
          <div>{this.renderDoneClick()}</div>
        </div>
        )}
        {this.state.pav && this.state.clickedDone
          ? JSON.stringify(this.state.pav.result)
          : null}
      </div>
    );
  }
}
export default FormBox;
