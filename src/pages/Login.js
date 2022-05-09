import React from "react";
import SocialLogin from "../components/SocialLogin";
import { MobileContainer, Grid, Button, Text, Image, Input } from "../elements";

const Login = (props) => {
  return (
    <>
      <MobileContainer>
        <Grid signupFlex height="60vh" alignItems="center">
          <Text size="40px">logo</Text>
        </Grid>
        <Grid flex direction="column" alignItems="center">
          <SocialLogin></SocialLogin>

          <Button>기업 회원이신가요?</Button>
          <Button>가입 없이 둘러보기</Button>
        </Grid>
      </MobileContainer>
    </>
  );
};

export default Login;
