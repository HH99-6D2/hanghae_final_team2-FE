import React, { useState } from "react";
import {
  ProfileHeader,
  Dateset,
  AddTheme,
  Imageupload,
  Category,
} from "../components";
import {
  Container,
  MobileContainer,
  Grid,
  Input,
  Text,
  Button,
} from "../elements";

const CreateChat = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const [name, inputname] = useState("");
  const [tag, inputtag] = useState("");
  return (
    <Container>
      <MobileContainer>
        <Grid>
          <ProfileHeader save>
            <Button
              _onClick={() => {
                console.log("데이터보내야함");
              }}
              mini
            >
              저장
            </Button>
            채팅방 생성
          </ProfileHeader>
        </Grid>

        <Imageupload />
        <Grid margin=' 7px auto'>
          <Text paddingbottom='17px'>채팅방 이름</Text>
          <Input
            placeholder='채팅방 제목을 입력해주세요'
            width='320px'
            _onChange={(e) => {
              inputname(e.target.value);
            }}
          />
        </Grid>
        <Grid margin=' 7px auto'>
          <Text padding='3px 16px'>카테고리 선택</Text>
          <Grid flex>
            <Button bg='#4D12FF' color='white' category>
              카테1
            </Button>
            <Button bg='#4D12FF' color='white' category>
              카테2
            </Button>
            <Button bg='#4D12FF' color='white' category>
              카테3
            </Button>
          </Grid>
        </Grid>

        <Grid margin='0px auto'>
          <Text paddingbottom='17px'>태그 추가</Text>
          <Input
            placeholder='태그를  입력해주세요'
            width='320px'
            _onChange={(e) => {
              inputtag(e.target.value);
            }}
          />
        </Grid>
        <Grid margin='7px 48px'>
          <Text>일정</Text>
          <Dateset />
        </Grid>
      </MobileContainer>
    </Container>
  );
};

export default CreateChat;
