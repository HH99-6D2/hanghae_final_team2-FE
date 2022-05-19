import React, { useEffect, useState } from "react";
import { Category, MainChat } from "../components";
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
          <Button
            _onClick={() => {
              navigate("/sidebar");
            }}
            large
          >
            임시 사이드 버튼
          </Button>
          <Button
            _onClick={() => {
              navigate("/login");
            }}
            large
          >
            임시 로그인 버튼
          </Button>
          <Grid flex justifyContent='space-evenly'>
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
              EV CHAT이 추천하는 채팅
            </Text>
          </Grid>
          <MainChat />
          <MainChat />
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
