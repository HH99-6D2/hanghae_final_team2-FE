import React, { useEffect, useState } from "react";
import { Category, MainChat, Header } from "../components";
import { Container, Grid, MobileContainer, Button, Text } from "../elements";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  // const [cate, setcate] = useState("");
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://yogoloper.shop/api/categories",
  //   }).then((res) => {
  //     setcate(res);
  //   });
  // }, []);
  // console.log(cate);

  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
          <Header />

          <Grid width='180px' margin='10px 50px'>
            <Text bold size='21px'>
              어떤 주제로 <br />
              이야기 해볼까요?
            </Text>
          </Grid>
          <Grid width='150px' margin='auto' flex justifyContent='space-evenly'>
            {/* {cate &&
              cate.data.map((p, idx) => {
                return <Category {...p} key={idx} />;
              })} */}

            <Button
              bg='#4D12FF'
              color='white'
              category
              _onClick={() => {
                navigate("/catechat/1");
              }}
            >
              스포츠
            </Button>
            <Button
              bg='#4D12FF'
              color='white'
              category
              _onClick={() => {
                navigate("/catechat/1");
              }}
            >
              콘서트
            </Button>
            <Button
              bg='#4D12FF'
              color='white'
              category
              _onClick={() => {
                navigate("/catechat/1");
              }}
            >
              전시회
            </Button>
            {/* <Category cate={cate} /> */}
          </Grid>
          <Grid width='160px' margin='10px 50px'>
            <Text bold size='21px'>
              EV CHAT이 <br />
              추천하는 채팅
            </Text>
          </Grid>
          <MainChat src='http://res.heraldm.com/content/image/2022/04/23/20220423000095_0.jpg' />
          <MainChat src='https://cdn.kado.net/news/photo/202101/1054679_483633_4425.jpg' />
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
