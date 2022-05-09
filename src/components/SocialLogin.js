import React from "react";
import styled from "styled-components";
const { Kakao } = window;
const SocialLogin = (props) => {
  const loginWithKakao = () => {
    console.log("hello");
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/loginsucess",
    });
  };

  return (
    <div>
      <a onClick={loginWithKakao}>
        <img
          src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
          width="80%"
        />
      </a>
    </div>
  );
};

export default SocialLogin;
