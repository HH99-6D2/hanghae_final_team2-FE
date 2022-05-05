import React from "react";
import Image from "../elements/Image";
import Text from "../elements/Text";
import Grid from "../elements/Grid";
import Container from "../elements/Container";
import Input from "../elements/Input";
import Button from "../elements/Button";
const MyProfile = (props) => {
  return (
    <>
      <Container>
        <Grid
          flex
          justifyContent="center"
          alignItems="center"
          inlineStyles="border: 1px solid black; height:10vh"
        >
          <Text bold>프로필 관리</Text>
        </Grid>
        <Grid
          flex
          justifyContent="center"
          alignItems="center"
          inlineStyles="border: 1px solid red;height:10vh"
        >
          <Text>프로필 사진</Text>
        </Grid>
        <Grid
          flex
          justifyContent="center"
          inlineStyles="border: 1px solid red;height:30vh;"
        >
          <Image src={props.src}></Image>
        </Grid>
        <Grid
          flex
          justifyContent="center"
          inlineStyles="border: 1px solid green;height:15vh;"
        >
          <Input label="닉네임" placeholder="김태희님"></Input>
        </Grid>
        <Grid
          flex
          justifyContent="center"
          inlineStyles="border: 1px solid green;height:15vh;"
        >
          <Input
            label="카카오톡 아이디 혹은 휴대번호"
            placeholder="010-****-****"
          ></Input>
        </Grid>
        <Grid
          flex
          justifyContent="center"
          inlineStyles="border: 1px solid green; height20vh;"
        >
          <Button text="저장"></Button>
        </Grid>
        <Grid
          flex
          justifyContent="center"
          inlineStyles="border: 1px solid green; height20vh;"
        >
          <Button text="탈퇴하기"></Button>
        </Grid>
      </Container>
    </>
  );
};

export default MyProfile;
