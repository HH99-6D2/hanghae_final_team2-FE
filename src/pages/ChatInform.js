import React, { useState } from "react";
import { Text, Grid, Image, Button } from "../elements";
import ProfileHeader from "./common/ProfileHeader";
const ChatInform = () => {
  return (
    <>
      <ProfileHeader>
        채팅방 정보
        <Button mini>수정</Button>
      </ProfileHeader>
      <Grid margin='23px 0px'>
        <Image
          CateChat
          src='https://cdn.kado.net/news/photo/202101/1054679_483633_4425.jpg'
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
    </>
  );
};

export default ChatInform;
