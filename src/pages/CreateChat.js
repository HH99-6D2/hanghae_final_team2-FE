import React from "react";
import { ProfileHeader, Dateset, AddTheme } from "../components";
import { Container, MobileContainer, Grid } from "../elements";

const CreateChat = (props) => {
  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader save>채팅방 만들기</ProfileHeader>

          <AddTheme />

          <Dateset />
        </MobileContainer>
      </Container>
    </>
  );
};

export default CreateChat;
