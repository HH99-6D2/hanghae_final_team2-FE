import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Auth = () => {
  const navigate = useNavigate();

  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    axios
      .get(`https://dev.djigcl48wudgm.amplifyapp.com/auth?code=${code}`)
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.data.accessToken);
        // localStorage.setItem("id", res.data.user.id);
        // localStorage.setItem("refresh", res.data.refreshToken);
        // localStorage.setItem("nick", res.data.user.nickname);

        // localStorage.setItem("social", res.data.socialToken);
        // localStorage.setItem("timeout", moment().add(8, "m"));
        console.log(moment()._d);
        navigate("/loginsucess");
      });
  }, []);

  return <></>;
};

export default Auth;
