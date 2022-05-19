import React from "react";
import { ProfileHeader, CateChat } from "../components";
import { Container, MobileContainer, Grid } from "../elements";
import { useParams } from "react-router-dom";
import { ReactComponent as Filter } from "../assets/Filter.svg";
const CateChatlist = (props) => {
  const { id } = useParams();
  return (
    <Container>
      <MobileContainer>
        <ProfileHeader search>
          <Grid position='absolute' top='40px' left='325px'>
            <Filter />
          </Grid>
        </ProfileHeader>
        <CateChat />
      </MobileContainer>
    </Container>
  );
};

export default CateChatlist;
