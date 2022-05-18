import React, { useEffect, useState } from "react";
import { Category, MainChat } from "../components";
import { Container, Grid, MobileContainer, Button } from "../elements";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();
  const [cate, setcate] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: "https://yogoloper.shop/api/categories",
    }).then((res) => {
      setcate(res);
    });
  }, []);
  console.log(cate);

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
            {cate &&
              cate.data.map((p, idx) => {
                return <Category {...p} key={idx} />;
              })}
            {/* <Category cate={cate} /> */}
          </Grid>
          <MainChat />
          <MainChat />
          <MainChat />
          <MainChat />
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
