import React, { useEffect, useState } from "react";
import CategorySlick from "./components/CategorySlick";
import MainChat from "./components/MainChat";
import { Grid, Text } from "../../elements";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Grid width='180px' margin='33px 27px'>
        <Text bold size='21px'>
          어떤 주제로 <br />
          이야기 해볼까요?
        </Text>
      </Grid>
      <Grid flex margin='auto' justifyContent='space-evenly'>
        <CategorySlick />
      </Grid>
      <Grid width='160px' margin='10px 50px'>
        <Text bold size='21px'>
          EV CHAT이 <br />
          추천하는 채팅
        </Text>
      </Grid>
      <MainChat src='http://res.heraldm.com/content/image/2022/04/23/20220423000095_0.jpg' />
      <MainChat src='https://cdn.kado.net/news/photo/202101/1054679_483633_4425.jpg' />
    </>
  );
};

export default Home;