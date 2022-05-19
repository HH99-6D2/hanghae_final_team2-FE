import React, { useState } from "react";
import { ProfileHeader } from "../components";
import {
  Text,
  Container,
  MobileContainer,
  Grid,
  Image,
  Button,
  Input,
} from "../elements";

const Setting = [
  {
    title: "채팅방 이름",
    default: "라건아",
  },
  {
    title: "카테고리",
    default: "스포츠",
  },
  {
    title: "태그 정보",
    default: "운동",
  },
];

const ChatEdit = () => {
  return (
    <Container>
      <MobileContainer>
        <ProfileHeader back>
          채팅방 수정
          <Button mini>저장</Button>
        </ProfileHeader>
        <Grid margin='15px 0px'>
          <Image
            CateChat
            src='https://cdn.kado.net/news/photo/202101/1054679_483633_4425.jpg'
          />
        </Grid>
        {Setting.map((Setting) => {
          return (
            <>
              <Grid margin='10px 20px 10px 35px'>
                <Text bold color='#4D12FF'>
                  {Setting.title}
                </Text>
                <Input edit defaultValue={Setting.default}></Input>
              </Grid>
            </>
          );
        })}
      </MobileContainer>
    </Container>
  );
};

export default ChatEdit;
