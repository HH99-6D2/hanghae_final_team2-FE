import React, { useState } from "react";
import { ProfileHeader, Dateset, Imageupload } from "../components";
import {
  Container,
  MobileContainer,
  Grid,
  Input,
  Text,
  Button,
} from "../elements";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreateChat = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const [name, inputname] = useState("");
  const [tag, inputtag] = useState("");
  const navigate = useNavigate();
  console.log(name);
  return (
    <Container>
      <MobileContainer>
        <Grid>
          <ProfileHeader save>
            <Button
              cursor='pointer'
              _onClick={() => {
                // axios({
                //   method: "POST",
                //   url: "https://yogoloper.shop/api/rooms",
                //   headers: {
                //     Authorization: `Bearer ${TOKEN}`,
                //   },
                //   data: {
                //     title: { name },
                //     positionX: 35.97664845766847,
                //     positionY: 126.99597295767953,
                //     regionAName: "서울",
                //     regionBName: "송파구",
                //     categoryId: 1,
                //     startDate: "2022-05-11 12:00:00",
                //     endDate: "2022-05-16 00:00:00",
                //     maxUser: 10,
                //     imageUrl:
                //       "https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png",
                //     tags: ["잠실야구장", "tag200", "tag300"],
                //   },
                // }).then((res) => {
                //   console.log(res);
                // });
                navigate("/addchatcheck");
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
          <Text paddingbottom='17px' color='#4D12FF' bold>
            채팅방 이름
          </Text>
          <Input
            placeholder='채팅방 제목을 입력해주세요'
            width='320px'
            _onChange={(e) => {
              inputname(e.target.value);
            }}
          />
        </Grid>
        <Grid margin=' 7px auto'>
          <Text padding='3px 16px' color='#4D12FF' bold>
            카테고리 선택
          </Text>
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
          <Text paddingbottom='17px' color='#4D12FF' bold>
            태그 추가
          </Text>
          <Input
            placeholder='태그를  입력해주세요'
            width='320px'
            _onChange={(e) => {
              inputtag(e.target.value);
            }}
          />
        </Grid>
        <Grid margin='7px 48px'>
          <Text color='#4D12FF' bold>
            일정
          </Text>
          <Dateset />
        </Grid>
      </MobileContainer>
    </Container>
  );
};

export default CreateChat;
