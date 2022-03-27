import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./style_demo.module.css";

////// add button to fill automatic offices and candidates names

export default function OfficeCard(props) {

  /* Office textbox */
  const officeNameRef = React.useRef();
  const [officeInput, setOfficeInput] = React.useState("");
  const [officeError, setOfficeError] = React.useState(true);
  
  /* Candidate textboxs */
  const [inputValues, setInputValues] = React.useState({});
  const handleChange = (inputId) => (e) =>
    setInputValues({ ...inputValues, [inputId]: e.target.value });

  const handleOfficeInputChange = (event) => {
    setOfficeError(false);
    if (officeInput.length === 0) {
      setOfficeError(true);
    }
  };

  const handleOnInput = (event) => {
    setOfficeInput(event.target.value);
  };

  const getTextboxs = () => {
    let content = [];
    for (let i = 0; i < props.numOfCandidates; i++) {
      content.push(
        <TextField
          id={`candidate${i}`}
          key={`candidate${i}`}
          label="Candidate Name"
          variant="standard"
          value={inputValues[i]}
          onChange={handleChange(i)}
        />
      );
    }
    return content;
  };


  const done = () => {
    if (props.nextClicked) {
      props.officesArr.splice(props.index, 0, officeNameRef.current.value);
      props.candidatesArr.splice(
        props.index,
        0,
        Object.values(inputValues)
      );
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
            id="officeName"
            label="Office Name"
            variant="outlined"
            required
            error={officeError}
            value={officeInput}
            onChange={handleOfficeInputChange}
            onInput={handleOnInput}
            inputRef={officeNameRef}
          />
          {getTextboxs()}
        </Box>
        {done()}
      </div>
    </figure>
  );
}
