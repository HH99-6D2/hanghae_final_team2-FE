import React from "react";
import ProfileHeader from "../components/ProfileHeader";
import { MobileContainer, Image, Grid, Button, Input } from "../elements";
import { MdPhotoCamera } from "react-icons/md";

const LoginSucess = () => {
  return (
    <>
      <MobileContainer>
        <ProfileHeader />
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
    </>
  );
};
export default LoginSucess;
