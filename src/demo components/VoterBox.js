import * as React from "react";
import style from "./style_demo.module.css";
import VoterCard from "./VoterCard";

class VoterBox extends React.Component {
    constructor() {
        super();
    }

    renderVotes = () => {
    const cp = [];
      for (let i = 1; i <= this.props.data.Voters; i++) {
        cp.push(
          <VoterCard
            data={this.props.data}
            officesArr={this.props.officesArr}
            candidatesArr={this.props.candidatesArr}
          />
        );
      }
        return cp;
  };


    render() {
        return (
            <div>
                {this.renderVotes()}
            </div>
        );
    }
}

export default VoterBox;
