import React from "react";
import { ReactComponent as Blockuser } from "../../assets/Blockuser.svg";
import { Grid, Text, Button } from "../../elements";
const Blockperson = (props) => {
  return (
    <Grid flex margin='8px 26px'>
      <Blockuser />
      <Text bold width='160px' margin='auto 11px'>
        user name
      </Text>
      <Button color='#767676'>해제</Button>
    </Grid>
  );
};

export default Blockperson;
