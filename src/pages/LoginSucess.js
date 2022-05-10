import React from "react";
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

// 최초로그인시 보여줄 페이지(닉네임,이미지변경)

const LoginSucess = (props) => {
  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
          <ProfileHeader>프로필 설정</ProfileHeader>
          <Grid signupFlex height="40vh" alignItems="center">
            <Image inlineStyles="position: relative;">
              <Grid inlineStyles="position: absolute; top:90px; left:110px;">
                <MdPhotoCamera size="20px" />
              </Grid>
            </Image>
          </Grid>
          <Grid signupFlex>
            <Input placeholder="카카오톡 닉네임">닉네임</Input>
          </Grid>
          <Grid signupFlex>
            <Button bg="black" margin="30px 0px 0px 0px" color="white">
              시작하기
            </Button>
          </Grid>
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
};
export default LoginSucess;
