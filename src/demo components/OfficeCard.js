import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import style from "./style_demo.module.css";


export default function OfficeCard(props) {

  let currOffice = {
    officeName: "",
    candidatesNames: Array(0)
  }

  /* Office textbox */
  const [officeInput, setOfficeInput] = React.useState("");
  const [officeError, setOfficeError] = React.useState(true);

  const handleOfficeInputChange = (event) => {
    event.preventDefault();
    setOfficeInput(event.target.value);
    currOffice.officeName = officeInput;

    setOfficeError(false);
    if (officeInput.length == 0) {
      setOfficeError(true);
    }

    console.log(currOffice);
  };

  /* Candidate textboxs */
  const [candidateInput, setCandidateInput] = React.useState("");

  const handleCandidateInputChange = (event) => {
    setCandidateInput(event.target.value);
    currOffice.candidatesNames.push(candidateInput);
  };

  const getTextboxs = (val) => {
    let content = [];
    for (let i = 1; i <= val; i++) {
      content.push(
        <TextField
          id={`candidate${i}`}
          label="Candidate Name"
          variant="standard"
          onChange={handleCandidateInputChange}
          // color="orange"
        />
      );
    }
    return content;
  };

  return (
    <figure className={style.office}>
      <div className={style.officeBox}>
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
          />
          {getTextboxs(props.data)}
        </Box>
      </div>
    </figure>
  );
}
