import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Grid } from "../elements";
const Time = () => {
  const settings = {
    width: "155px",
    height: "30px",
    margin: "10px auto",
    borderRadius: "15px",
  };
  const EditText = styled(TextField)({
    width: "200px",
  });
  const [startTime, setstart] = useState(null);
  const [endTime, setend] = useState(null);

  console.log(startTime, endTime);
  return (
    // <Stack component='form' noValidate spacing={3}>
    <>
      <Grid between>
        <EditText
          style={{ ...settings }}
          id='time'
          type='time'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setstart(e)}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ width: 150 }}
        />
        <TextField
          style={{ ...settings }}
          id='time'
          type='time'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setend(e)}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </Grid>
    </>
  );
};

export default Time;
