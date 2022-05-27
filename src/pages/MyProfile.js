import React, { useState } from "react";
import ProfileHeader from "../components/common/ProfileHeader";
import { Grid, Button, Text, Image, Input } from "../elements";

import axios from "axios";
import Profilebig from "../assets/Profilebig.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Profile11 from "../assets/Profile11.svg";
import Profile22 from "../assets/Profile22.svg";
import Profile33 from "../assets/Profile33.svg";
import Profile44 from "../assets/Profile44.svg";
import Profile55 from "../assets/Profile55.svg";
import Profile66 from "../assets/Profile66.svg";
import Profile77 from "../assets/Profile77.svg";
import Profile88 from "../assets/Profile88.svg";
import Profile99 from "../assets/Profile99.svg";
import Profile100 from "../assets/Profile100.svg";

// 햄버거바->프로필 수정 클릭시 보여줄 페이지

const MyProfile = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const SoTOKEN = sessionStorage.getItem("social");
  const RETOKEN = sessionStorage.getItem("refresh");
  const nickname = sessionStorage.getItem("nick");
  const id = sessionStorage.getItem("id");
  const navigate = useNavigate();

  const [nick, inputnick] = useState(nickname);
  const location = useLocation();

  const [type, setctype] = useState(location.state && location.state.cType);

  const Setting = [
    {
      Type: 1,
      url: Profile11,
    },
    {
      Type: 2,
      url: Profile22,
    },
    {
      Type: 3,
      url: Profile33,
    },
    {
      Type: 4,
      url: Profile44,
    },
    {
      Type: 5,
      url: Profile55,
    },
    {
      Type: 6,
      url: Profile66,
    },
    {
      Type: 7,
      url: Profile77,
    },
    {
      Type: 8,
      url: Profile88,
    },
    {
      Type: 9,
      url: Profile99,
    },
    {
      Type: 10,
      url: Profile100,
    },
  ];

  //닉네임과 캐릭터 변경
  const donick = () => {
    axios({
      method: "patch",
      url: "https://junehan-test.shop/api/user",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        nickname: `${nick}`,
        cType: location.state.cType,
      },
    }).then((res) => {
      console.log(res);
      sessionStorage.setItem("nick", nick);
    });
  };
  //로그아웃
  const dologout = () => {
    axios({
      method: "patch",
      url: "https://junehan-test.shop/api/auth/logout",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        accessToken: `${SoTOKEN}`,
      },
    });

    sessionStorage.clear();
    navigate("/");
  };

  //회원탈퇴
  const dosignout = () => {
    axios({
      method: "post",
      url: "https://junehan-test.shop/api/auth/signout",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        accessToken: `${SoTOKEN}`,
      },
    });

    sessionStorage.clear();
    navigate("/");
  };

  return (
    <>
      <ProfileHeader save>
        프로필 수정
        <Button mini _onClick={donick}>
          저장
        </Button>
      </ProfileHeader>
      <Grid
        signupFlex
        height='200px'
        alignItems='center'
        _onClick={() => navigate("/profileimage")}
      >
        {/* {Setting.map((Setting) => (
              <img
                src={
                  location.state.cType === Setting.Type
                    ? Setting.url
                    : Profilebig
                }
              ></img>
            ))} */}
      </Grid>

      <Grid signupFlex>
        <Input
          width='80%'
          _onChange={(e) => {
            inputnick(e.target.value);
          }}
          defaultValue={nickname}
        ></Input>
      </Grid>
      <Grid flex direction='column' center>
        <Text create bold width margin='27px 0px 7px 35px '>
          위치정보 수집 동의
        </Text>
        <Button
          color='#767676'
          margin='0px auto 21px 18px'
          profile
          bordebottom='1px solid #EAEAEA '
        >
          동의
        </Button>
      </Grid>
      <Button
        color='#4d12ff'
        margin='0px auto 21px 18px'
        profile
        bordebottom='1px solid #EAEAEA '
        bold
        _onClick={dologout}
      >
        로그아웃
      </Button>
      <Button
        color='#121212'
        margin='0px auto 21px 18px'
        profile
        bordebottom='1px solid #EAEAEA '
        _onClick={dosignout}
      >
        회원탈퇴
      </Button>
    </>
  );
};

export default MyProfile;
