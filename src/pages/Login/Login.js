import React from "react";
import SocialLogin from "./components/SocialLogin";
import { ReactComponent as Loginlogo } from "../../assets/Loginlogo.svg";
import { Grid, Button } from "../../elements";

// 카카오소셜로그인을 위한 로그인 페이지

const Login = (props) => {
  return (
    <>
      <Grid signupFlex height='60vh' alignItems='center'>
        <Loginlogo />
      </Grid>
      <Grid direction='column' signupFlex>
        <SocialLogin />
        <Grid>
          <Button textAlign margin='13px auto' color='rgba(0, 0, 0, 0.5)'>
            기업 회원이신가요?
          </Button>
          <Button
            textAlign
            width='335px'
            margin='0px auto'
            color='rgba(0, 0, 0, 0.5)'
          >
            가입 없이 둘러보기
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
