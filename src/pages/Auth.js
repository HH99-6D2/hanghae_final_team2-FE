import React, { useState, useEffect } from "react";

import axios from "axios";
const Auth = () => {
  const CLIENT_ID = "82ee00706284e6dd3a6f91adf63cc70e";

  const REDIRECT_URI = "http://junehan-test.shop/social/oauth";
  //   const REDIRECT_URI = "http://localhost:3000/oauth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  let code = new URL(window.location.href).searchParams.get("code");
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get(REDIRECT_URI).then((res) =>
      // setData(res.data)

      console.log(res)
    );
  }, []);

  console.log(data);
  return <></>;
};

export default Auth;
