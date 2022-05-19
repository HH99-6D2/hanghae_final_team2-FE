import React, { useState } from "react";
import { ProfileHeader } from "../components";
import {
  Text,
  Container,
  MobileContainer,
  Grid,
  Image,
  Button,
} from "../elements";
import { ReactComponent as Info } from "../assets/Info.svg";
const CreateChatFinal = () => {
  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader back></ProfileHeader>
          <Grid signupFlex>
            <Info />
            <Text margin='0px 6px' bold size='14px'>
              아래 정보로 채팅방을 생성하시겠습니까?{" "}
            </Text>
          </Grid>
          <Grid margin='23px 0px'>
            <Image
              CateChat
              src='http://newsimg.hankookilbo.com/2019/04/03/201904031896022167_10.jpg'
            />
          </Grid>
          <Grid flex margin='0px 49px'>
            <Text create bold>
              채팅 이름
            </Text>
            <Text color='#767676'>잠실 삼성썬더스 농구</Text>
          </Grid>
          <Grid flex margin='20px 49px'>
            <Text create bold>
              카테고리
            </Text>
            <Text color='#767676'>스포츠</Text>
          </Grid>
          <Grid flex margin='0px 49px'>
            <Text create bold>
              태그 정보
            </Text>
            <Text color='#767676'>#농구 #잠실</Text>
          </Grid>
          <Grid flex margin='20px 49px'>
            <Text create bold>
              위치
            </Text>
            <Text color='#767676'>잠실 </Text>
          </Grid>
          <Grid flex margin='0px 49px'>
            <Text create bold>
              일정
            </Text>
            <Grid>
              <Text color='#767676'>20222.05.20 07:00~ </Text>
              <Text color='#767676'>20222.05.25 07:00 </Text>
            </Grid>
          </Grid>
          <Button
            large
            bg='#4D12FF'
            color='white'
            width='320px'
            margin=' 74px auto 20px'
          >
            채팅방 생성하기
          </Button>
        </MobileContainer>
      </Container>
    </>
  );
};

export default CreateChatFinal;
