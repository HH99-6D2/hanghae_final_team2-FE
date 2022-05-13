import React from "react";
import { ProfileHeader, CateChat } from "../components";
import { Container, MobileContainer } from "../elements";
const CateChatlist = (props) => {
  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader></ProfileHeader>
          <CateChat></CateChat>
          <CateChat></CateChat>
        </MobileContainer>
      </Container>
    </>
  );
};

export default CateChatlist;
