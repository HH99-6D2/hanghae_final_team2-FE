import React, { useState } from "react";
import { ProfileHeader } from "../components";
import { Text, Container, MobileContainer, Grid, Image } from "../elements";

const ChatInform = () => {
  return (
    <Container>
      <MobileContainer>
        <ProfileHeader>채팅방 정보</ProfileHeader>
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
            참여인원
          </Text>
          <Text color='#767676'>10/20</Text>
        </Grid>
        <Grid flex margin='0px 49px'>
          <Text create bold>
            주제
          </Text>
          <Text color='#767676'>스포츠</Text>
        </Grid>
        <Grid flex margin='20px 49px'>
          <Text create bold>
            태그 정보
          </Text>
          <Text color='#767676'>#빵 #우유 </Text>
        </Grid>
        <Grid flex margin='0px 49px'>
          <Text create bold>
            위치
          </Text>
          <Text color='#767676'>서울 영등포</Text>
        </Grid>
        <Grid flex margin='20px 49px'>
          <Text create bold>
            일정
          </Text>
          <Grid>
            <Text color='#767676'>20222.05.20 07:00~ </Text>
            <Text color='#767676'>20222.05.25 07:00 </Text>
          </Grid>
        </Grid>
      </MobileContainer>
    </Container>
  );
};

export default ChatInform;
