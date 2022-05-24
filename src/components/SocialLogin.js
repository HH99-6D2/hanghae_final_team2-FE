import React from "react";
import { Grid, Button } from "../elements";
import { ReactComponent as Loginlogo } from "../assets/Loginlogo.svg";
// const { Kakao } = window;
const SocialLogin = (props) => {
  console.log(window.location.href);
  const style = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <Grid signupFlex>
      <a
        href='http://junehan-test.shop/api/auth/login?provider=kakao'
        style={style}
      >
        <Button
          textAlign
          bg='#4D12FF'
          width='314px'
          margin='30px 0px 0px 0px'
          color='white'
        >
          카카오계정으로 로그인하기
        </Button>
      </a>
    </Grid>
  );
};

export default SocialLogin;
