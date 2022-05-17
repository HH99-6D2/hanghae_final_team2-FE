import React, { useEffect, useState } from "react";
import { Category, MainChat } from "../components";
import { Container, Grid, MobileContainer } from "../elements";
import axios from "axios";
import { BsChevronDoubleLeft } from "react-icons/bs";

const Home = (props) => {
  const [cate, setcate] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: "http://yogoloper.shop/api/categories",
    }).then((res) => {
      setcate(res);
    });
  }, []);
  console.log(cate);

  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
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
