import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Grid } from "../elements";
const Time = () => {
  const settings = {
    width: "150px",
    margin: "0px",
  };
  const [startTime, setstart] = useState(null);
  const [endTime, setend] = useState(null);

  console.log(startTime, endTime);
  return (
    // <Stack component='form' noValidate spacing={3}>
    <>
      <Grid between>
        <TextField
          id='time'
          type='time'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(value) => setstart(value)}
          inputProps={{
            step: 300, // 5 min
          }}
          value={value}
          sx={{ width: 150 }}
        />
        <TextField
          {...settings}
          id='time'
          type='time'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(end) => setend(end)}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </Grid>
    </>
  );
};

export default Time;
