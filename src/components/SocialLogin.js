import React from "react";
import axios from "axios";
import instance from "../shared/axios";
// const { Kakao } = window;
const SocialLogin = (props) => {
  const CLIENT_ID = "82ee00706284e6dd3a6f91adf63cc70e";

  const REDIRECT_URI = "http://junehan-test.shop/social/oauth";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // const loginWithKakao = () => {
  //   Kakao.Auth.authorize({
  //     redirectUri: "http://junehan-test.shop/social/oauth",
  //   });
  // };

  // const dologin = () => {
  //   instance
  //     .get("/auth/login?provider=kakao")
  //     .then((res) => console.log(res))
  //     .catch(function (err) {
  //       console.log(err);
  //     });
  // };

  console.log(window.location.href);
  return (
    <a href='http://junehan-test.shop/api/auth/login?provider=kakao'>
      <img
        src='//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg'
        width='80%'
      />
    </a>
  );
};

export default SocialLogin;
