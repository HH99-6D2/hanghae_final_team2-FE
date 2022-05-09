import React from 'react';

import Category from '../components/Category';
import MainChat from '../components/MainChat';
import { Container, Grid, MobileContainer } from '../elements';
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
