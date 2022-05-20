import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Grid } from "../elements";
const Time = () => {
  const settings = {
    height: 30,
    // margin: 10 auto,
    // borderradius: 15,
  };
  // const EditText = styled(TextField)({
  //   width: "200px",
  // });
  const [startTime, setstart] = useState(null);
  const [endTime, setend] = useState(null);

  console.log(startTime, endTime);
  return (
    // <Stack component='form' noValidate spacing={3}>
    <>
      <Grid between>
        <TextField
          {...settings}
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
          {...settings}
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
