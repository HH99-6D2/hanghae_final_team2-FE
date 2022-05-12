import React from "react";
import { Grid, Text } from "../elements";

const Alarmlist = (props) => {
  return (
    <>
      <Grid between width="350px" height="107px" margin="8px 10px" bottomborder>
        <Grid>
          <Grid margin="17px 25px 12px 28px">
            <Text bold>5월의 핫한 전시 알려드려요</Text>
            <Grid margin="10px 0px">
              <Text>2022.05.05.12pm</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Alarmlist;
