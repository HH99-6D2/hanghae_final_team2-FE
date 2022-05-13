import React, { useState } from "react";
import { ProfileHeader, Dateset, AddTheme, Imageupload } from "../components";
import { Container, MobileContainer, Grid, Input, Text } from "../elements";

const CreateChat = (props) => {
  const [name, inputname] = useState("");
  const [tag, inputtag] = useState("");
  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader save>채팅방 생성</ProfileHeader>
          <Imageupload />
          <Grid margin=" 7px auto">
            <Text paddingbottom="17px">채팅방 이름</Text>
            <Input
              placeholder="채팅방 제목을 입력해주세요"
              width="320px"
              _onChange={(e) => {
                inputname(e.target.value);
              }}
            />
          </Grid>
          <Grid margin=" 7px auto">
            <Text paddingbottom="17px">태그 추가</Text>
            <Input
              placeholder="태그를  입력해주세요"
              width="320px"
              _onChange={(e) => {
                inputtag(e.target.value);
              }}
            />
          </Grid>
          <AddTheme />

          <Dateset />
        </MobileContainer>
      </Container>
    </>
  );
};

export default CreateChat;
