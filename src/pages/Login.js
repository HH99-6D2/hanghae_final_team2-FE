import React from "react";
import SocialLogin from "../components/SocialLogin";
import {
  MobileContainer,
  Grid,
  Button,
  Text,
  Image,
  Input,
  Container,
} from "../elements";

// 카카오소셜로그인을 위한 로그인 페이지

const Login = (props) => {
  return (
    <>
      <Container>
        <MobileContainer>
          <Grid signupFlex height="60vh" alignItems="center">
            <Text size="40px">logo</Text>
          </Grid>
          <Grid direction="column" signupFlex>
            <SocialLogin />
            <Grid>
              <Button margin="20px 0px">기업 회원이신가요?</Button>
              <Button width="335px">가입 없이 둘러보기</Button>
            </Grid>
          </Grid>
        </MobileContainer>
      </Container>
    </>
  );
};

export default Login;
