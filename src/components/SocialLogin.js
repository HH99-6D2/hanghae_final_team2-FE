import React from "react";
import { Grid } from "../elements";
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
        <img
          src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
          width='80%'
        />
      </a>
    </Grid>
  );
};

export default SocialLogin;
