import React from "react";
import { ProfileHeader, CateChat } from "../components";
import { Container, MobileContainer, Text } from "../elements";
import { useParams } from "react-router-dom";
const CateChatlist = (props) => {
  const { id } = useParams();
  return (
    <Container>
      <MobileContainer>
        <Text>{id}페이지이다</Text>
        <ProfileHeader></ProfileHeader>
        <CateChat></CateChat>
        <CateChat></CateChat>
      </MobileContainer>
    </Container>
  );
};

export default CateChatlist;
