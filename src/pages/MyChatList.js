import React, { useState, useEffect } from "react";
import { Container, Grid, MobileContainer } from "../elements";
import { MyChat, ProfileHeader } from "../components";
import axios from "axios";
// 햄버거바->채팅방관리 클릭시 보여줄 페이지

const MyChatList = (props) => {
  const [chatlist, setChatlist] = useState("");

  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader>채팅방 관리</ProfileHeader>
          <MyChat />
        </MobileContainer>
      </Container>
    </>
  );
};

export default MyChatList;
