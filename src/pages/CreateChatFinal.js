import React, { useEffect, useState } from "react";
import ProfileHeader from "./common/ProfileHeader";
import { Text, Grid, Image, Buttons } from "../elements";
import { ReactComponent as Info } from "../assets/Info.svg";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const CreateChatFinal = () => {
  const TOKEN = sessionStorage.getItem("token");
  const location = useLocation();
  const [send, setsend] = useState(location.state);
  const navigate = useNavigate();
  const sendtag = send.tag.split("#");

  const createchat = () => {
    axios({
      method: "post",
      url: "https://yogoloper.shop/api/rooms",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        title: send.title,
        positionX: send.place.x,
        positionY: send.place.y,
        regionAName: send.region[0],
        regionBName: send.region[1],
        spot: send.placename[0],
        category: send.category,
        startDate: `${send.startdate} ${send.starttime} `,
        endDate: `${send.enddate} ${send.endtime}`,
        imageUrl: send.image,
        tags: sendtag.slice(1, 4),
      },
    }).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  return (
    <>
      <ProfileHeader back></ProfileHeader>
      <Grid signupFlex>
        <Info />
        <Text margin='0px 6px' bold size='14px'>
          아래 정보로 채팅방을 생성하시겠습니까?
        </Text>
      </Grid>
      <Grid margin='23px 0px'>
        <Image CateChat src={send.image} />
      </Grid>
      <Grid flex margin='0px 49px'>
        <Text create bold>
          채팅 이름
        </Text>
        <Text color='#767676'>{send.title}</Text>
      </Grid>
      <Grid flex margin='20px 49px'>
        <Text create bold>
          카테고리
        </Text>
        <Text color='#767676'>{send.category}</Text>
      </Grid>
      <Grid flex margin='0px 49px'>
        <Text create bold>
          태그 정보
        </Text>
        <Text color='#767676'>{send.tag}</Text>
      </Grid>
      <Grid flex margin='20px 49px'>
        <Text create bold>
          위치
        </Text>
        <Text color='#767676'>{send.region} </Text>
      </Grid>
      <Grid flex margin='0px 49px'>
        <Text create bold>
          일정
        </Text>
        <Grid>
          <Text color='#767676'>
            {send.startdate}
            {""} {send.starttime}
          </Text>
          <Text color='#767676'>
            {send.enddate}
            {""} {send.endtime}
          </Text>
        </Grid>
      </Grid>
      <Buttons margin='auto' _onClick={createchat}>
        채팅방 생성하기
      </Buttons>
    </>
  );
};

export default CreateChatFinal;
