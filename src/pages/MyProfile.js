import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import {
  MobileContainer,
  Grid,
  Button,
  Text,
  Image,
  Input,
  Container,
} from "../elements";
import { MdPhotoCamera } from "react-icons/md";
import axios from "axios";
import { ReactComponent as Profilebig } from "../assets/Profilebig.svg";
import { useNavigate } from "react-router-dom";

// 햄버거바->프로필 수정 클릭시 보여줄 페이지

const MyProfile = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const SoTOKEN = sessionStorage.getItem("social");
  const RETOKEN = sessionStorage.getItem("refresh");
  const nickname = sessionStorage.getItem("nick");
  const id = sessionStorage.getItem("id");
  const navigate = useNavigate();
  const [nick, inputnick] = useState(nickname);

  const donick = () => {
    axios({
      method: "patch",
      url: "https://junehan-test.shop/api/user/update",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        nickname: `${nick}`,
      },
    }).then((res) => {
      console.log(res);
      sessionStorage.setItem("nick", nick);
    });
  };
  // headers: {
  //   “Authorization”: “bearer <token>”
  // }
  // BODY: JSON
  // - nickname: 변경할 닉네임/string(2~16 길이의 문자열)

  /* AXIOS DOCUMENT API USAGE ************************
  axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
   ***************************************************/
  const dologout = () => {
    axios({
      method: "post",
      url: "https://junehan-test.shop/api/auth/logout",
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: {
        accessToken: SoTOKEN,
      },
    });

    sessionStorage.clear();
    Navigate("/");
  };

  return (
    <>
      <Container>
        <MobileContainer>
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
            <Profilebig />
          </Grid>
          <Grid signupFlex alignItems='center'>
            <Image inlineStyles='position: relative;'>
              {/* <Grid inlineStyles='position: absolute; top:90px; left:110px;'>
                <Image src={profile} width='100px' height='100px'></Image>
              </Grid> */}
            </Image>
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
            _onClick={dologout}
          >
            회원탈퇴
          </Button>
        </MobileContainer>
      </Container>
    </>
  );
};

export default MyProfile;
