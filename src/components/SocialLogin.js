import React from "react";

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

  console.log(window.location.href);
  return (
    <a href="http://junehan-test.shop/social/oauth">
      <img
        src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
        width="80%"
      />
    </a>
  );
};

export default SocialLogin;
