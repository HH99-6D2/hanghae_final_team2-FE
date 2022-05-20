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
  Buttons,
} from "../elements";
import { MdPhotoCamera } from "react-icons/md";
import axios from "axios";
import profile from "../assets/profile.svg";
// 햄버거바->프로필 수정 클릭시 보여줄 페이지

const MyProfile = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const SoTOKEN = sessionStorage.getItem("social");
  const RETOKEN = sessionStorage.getItem("refresh");
  const nickname = sessionStorage.getItem("nick");
  const id = sessionStorage.getItem("id");
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
    // axios.post("http://junehan-test.shop/api/auth/logout", {
    //   headers: {
    //     Authorization: `bearer ${TOKEN}`,
    //   },
    //   body: {
    //     accessToken: `${SoTOKEN}`,
    //   },
    // });
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
          <Grid signupFlex height='40vh' alignItems='center'>
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
          <Grid signupFlex>
            <Button
              bg='black'
              width='80%'
              margin='30px 0px 0px 0px'
              color='white'
              _onClick={dologout}
            >
              로그아웃
            </Button>
          </Grid>
        </MobileContainer>
      </Container>
    </>
  );
};

export default MyProfile;
