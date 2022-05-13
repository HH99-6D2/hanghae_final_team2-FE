import React, { useState } from "react";
import ProfileHeader from "../components/ProfileHeader";
import {
  MobileContainer,
  Image,
  Grid,
  Button,
  Input,
  Container,
} from "../elements";
import { MdPhotoCamera } from "react-icons/md";
import { useNavigate } from "react-router-dom";

// 최초로그인시 보여줄 페이지(닉네임,이미지변경)

const LoginSucess = (props) => {
  const navigate = useNavigate();
  const [nick, inputnick] = useState("카카오에서 받아온 닉네임");
  const doclick = () => {
    // axios해서 닉네임이랑,이미지url 서버로 보내기(변경사항이 있을때)
    navigate("/");
  };

  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
          <ProfileHeader>프로필 설정</ProfileHeader>
          <Grid signupFlex height='318px' alignItems='center'>
            <Image
              _onClick={() => {
                console.log("이미지변경할거다");
              }}
              inlineStyles='position: relative;'
            >
              <Grid inlineStyles='position: absolute; top:90px; left:110px;'>
                <MdPhotoCamera size='20px' />
              </Grid>
            </Image>
          </Grid>
          <Grid signupFlex>
            <Input
              width='80%'
              _onChange={(e) => {
                inputnick(e.target.value);
              }}
              placeholder='카카오톡 닉네임'
            >
              닉네임
            </Input>
          </Grid>
          <Grid signupFlex>
            <Button
              bg='black'
              margin='30px 0px 0px 0px'
              color='white'
              _onClick={() => {
                doclick();
              }}
            >
              시작하기
            </Button>
          </Grid>
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};
export default LoginSucess;
