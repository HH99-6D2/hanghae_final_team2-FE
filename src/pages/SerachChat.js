import React from "react";
import { ReactComponent as Searchglas } from "../assets/Searchglas.svg";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { ProfileHeader } from "../components";
import { MobileContainer, Container, Grid, Input } from "../elements";

const SerachChat = () => {
  return (
    <Container>
      <MobileContainer>
        <ProfileHeader search>
          검색
          <Grid position='absolute' top='40px' left='325px'>
            <Filter />
          </Grid>
        </ProfileHeader>
        <Grid position='relative' flex margin='20px auto'>
          <Input width='315px' />
          <Grid position='absolute' top='8px' left='280px'>
            <Searchglas />
          </Grid>
        </Grid>
      </MobileContainer>
    </Container>
  );
};

//top 40 left 315

export default SerachChat;
