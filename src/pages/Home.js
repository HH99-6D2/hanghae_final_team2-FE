import React from "react";
import { Category, MainChat } from "../components";
import { Container, Grid, MobileContainer } from "../elements";
const Home = (props) => {
  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
          <Grid>
            <Category />
            <MainChat />
          </Grid>
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
