import React from "react";

import Category from "../components/Category";
import MainChat from "../components/MainChat";
import { Grid, MobileContainer } from "../elements";
const Home = (props) => {
  return (
    <>
      <MobileContainer>
        <Grid>
          <Category></Category>
          <MainChat></MainChat>
        </Grid>
      </MobileContainer>
    </>
  );
};

export default Home;
