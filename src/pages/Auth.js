import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
      .get(`https://junehan-test.shop/api/auth/oauth?code=${code}`)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.accessToken);
        sessionStorage.setItem("id", res.data.user.id);
        sessionStorage.setItem("refresh", res.data.refreshToken);
        sessionStorage.setItem("nick", res.data.user.nickname);
        sessionStorage.setItem("social", res.data.socialToken);
        sessionStorage.setItem("socialre", res.data.socialRefreshToken);
        sessionStorage.setItem("cType", res.data.user.cType);

        navigate("/loginsucess");
      });
  }, []);

  return <></>;
};

export default Auth;
