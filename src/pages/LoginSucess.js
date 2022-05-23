import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import {
  MobileContainer,
  Image,
  Grid,
  Buttons,
  Input,
  Container,
} from "../elements";
import { MdPhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Profilebig } from "../assets/Profilebig.svg";
import axios from "axios";

// 최초로그인시 보여줄 페이지(닉네임,이미지변경)

const LoginSucess = (props) => {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem("nick");
  const TOKEN = sessionStorage.getItem("token");
  const [nick, inputnick] = useState(nickname);

  //닉네임 변경
  const doclick = () => {
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
    navigate("/");
  };

  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
          <ProfileHeader>프로필 설정</ProfileHeader>
          <Grid signupFlex height='270px' alignItems='center'>
            <Profilebig />
            <Image
              _onClick={() => {
                console.log("이미지변경할거다");
              }}
              inlineStyles='position: relative;'
            >
              <Grid inlineStyles='position: absolute; top:239px; left:217px;'>
                <MdPhotoCamera size='20px' />
              </Grid>
            </Image>
          </Grid>
          <Grid signupFlex margin='36px auto'>
            <Input
              width='310px'
              border='2px solid #4D12FF'
              _onChange={(e) => {
                inputnick(e.target.value);
              }}
              defaultValue={nickname}
            >
              닉네임
            </Input>
          </Grid>
          <Grid signupFlex>
            <Buttons
              _onClick={() => {
                doclick();
              }}
            >
              시작하기
            </Buttons>
          </Grid>
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};
export default LoginSucess;
