import React from "react";
import LoginSucess from "./LoginSucess";
import Text from "../elements/Text";

const { Kakao } = window;
const Login = () => {
  const loginWithKakao = () => {
    console.log("hello");
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/loginsucess",
    });
  };

  return (
    <>
      <div>
        <Grid></Grid>
      </div>

      <div>
        <a onClick={loginWithKakao}>
          <img
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="200"
          />
        </a>
      </div>
    </>
  );
};

export default Login;
