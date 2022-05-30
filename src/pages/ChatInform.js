import React, { useState } from "react";
import { Text, Grid, Image, Button } from "../elements";
import ProfileHeader from "../components/common/ProfileHeader";
import styled from "styled-components";
const ChatInform = () => {
  return (
    <>
      <Chatimage src='https://cdn.kado.net/news/photo/202101/1054679_483633_4425.jpg' />

      <Chatinform>
        <ProfileHeader chatinform>코엑스</ProfileHeader>
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
      </Chatinform>
    </>
  );
};

export default ChatInform;

const Chatimage = styled.div`
  width: 100%;
  height: 250px;
  background-image: url("${(props) => props.src}");
`;

const Chatinform = styled.div`
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px 15px 0px 0px;
  background: white;
  margin-top: -5px;
`;
