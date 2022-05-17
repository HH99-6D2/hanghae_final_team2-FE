import React from "react";
import axios from "axios";
import instance from "../shared/axios";
// const { Kakao } = window;
const SocialLogin = (props) => {
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
