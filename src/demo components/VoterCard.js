import * as React from 'react';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import style from "./style_demo.module.css";

export default function VoterCard(props) {

  /* voter name textbox */
  const voterNameRef = React.useRef();
  const [voterNameInput, setVoterNameInput] = React.useState("");
  const [voterNameError, setVoterNameError] = React.useState(true);

  /* voter selection textboxs */
  const [voterSelections, setVoterSelections] = React.useState({});
  const handleChange = (inputId) => (e) => {
    setVoterSelections({ ...voterSelections, [inputId]: e.target.value });
  }

  const handleVoterNameChange = (event) => {
    setVoterNameError(false);
    if (voterNameInput.length === 0) {
      setVoterNameError(true);
    }
  };

  const handleOnInput = (event) => {
    setVoterNameInput(event.target.value);
  };

  const getTextboxs = () => {
    let content = [];
    for (let i = 0; i < props.data.offices; i++) {
      if (props.randomClicked) {
        voterSelections[i] = props.candidatesArr[i][props.randIdx[i]];
      }
      content.push(
        <Box className={style.inputBox}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {props.officesArr[i]}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id={`office${i}`}
              key={`office${i}`}
              value={voterSelections[i] ?? ""}
              label={`office${i}`}
              onChange={handleChange(i)}
            >
              {props.candidatesArr[i].map((item) => (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      );
    }
    return content;
  };

  const done = () => {
    if (props.doneClicked) {
      if (props.votersArr.length < props.data.voters) {
        props.votersArr.splice(props.index, 0, Object.values(voterSelections));
      }
      if (props.votersNamesArr.length < props.data.voters) {
        props.votersNamesArr.splice(props.index, 0, voterNameRef.current.value);
      }
    }
  };

  return (
    <figure className={style.office}>
      <div className={style.formCard}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="voterName"
            label="Voter Name"
            variant="outlined"
            required
            error={voterNameError}
            value={props.randomClicked ? props.randomVoters : voterNameInput}
            onChange={handleVoterNameChange}
            onInput={handleOnInput}
            inputRef={voterNameRef}
          />
          {getTextboxs()}
        </Box>
        {done()}
      </div>
    </figure>
  );
}

