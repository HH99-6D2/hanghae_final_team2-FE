import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid } from "../elements";
const Time = () => {
  // const settings = {
  //   height: 30,
  //   // margin: 10 auto,
  //   // borderradius: 15,
  // };
  const EditText = styled(TextField)({
    width: "155px",
    borderRadius: "15px",
    marginTop: "20px",
    height: "30px",
  });
  const [startTime, setstart] = useState(null);
  const [endTime, setend] = useState(null);

  console.log(startTime, endTime);
  return (
    // <Stack component='form' noValidate spacing={3}>
    <>
      <Grid between>
        <EditText
          id='time'
          type='time'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => console.log(e.target.value)}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{
            borderRadius: 15,
            "&.MuiInputBase-input ": {
              borderRadius: 15,
            },
          }}
        />
        <EditText
          id='time'
          type='time'
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => console.log(e.target.value)}
          inputProps={{
            step: 300, // 5 min
          }}
          sx={{ borderRadius: 5 }}
        />
      </Grid>
    </>
  );
};

export default Time;
