import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import style from "./style_demo.module.css";


let candidates = [
  [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ],

  ["Itai", "Shani", "Liav", "Amichai", "April Tucker",],
];

export default function VoterCard(props) {

  const [candidateName, setCandidateName] = React.useState([]);

  const pushCandidatesIntoTextbox = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setCandidateName(value);
  };

    const getTextboxs = (val) => {
      let content = [];
      for (let i = 1; i <= val; i++) {
        content.push(
          <FormControl className={`style.voteForOffice${i}`} sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
            <InputLabel shrink htmlFor="select-multiple-native">
              Office Name
            </InputLabel>
            <Select
              multiple
              native
              value={candidateName}
              onChange={pushCandidatesIntoTextbox}
              label="Native"
              inputProps={{
                id: "select-multiple-native",
              }}
            >
              {candidates[(i-1)%2].map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </Select>
          </FormControl>
        );
      }
      return content;
    };

  return (
    <div className={style.voterGrid}>
      {getTextboxs(props.data.Offices)}
    </div>
  );
}