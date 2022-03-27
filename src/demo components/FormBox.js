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

      renderVoters: false,
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
    // this.props.callToPav();
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
    console.log(this.props.votersArr);
  };


  render() {
    return (
      <div>
        {!this.state.renderVoters ? (
          <div>
            <div className={style.formBox}>{this.renderOfficeCards()}</div>
            <div>{this.renderNextClick()}</div>
          </div>
        ) : (
          <div>
            <div className={style.formBox}>{this.renderVotersCards()}</div>
            <div>{this.renderDoneClick()}</div>
          </div>
        )}
      </div>
    );
  }
}
export default FormBox;
