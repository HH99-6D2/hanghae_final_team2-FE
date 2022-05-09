import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements";
import { BiArrowBack } from "react-icons/bi";

// 소셜로그인 성공-> 프로필수정페이지의 헤더
const ProfileHeader = (props) => {
  return (
    <Grid flex margin="20px 10px" justifyContent="space-between">
      <BiArrowBack size="30" />
      <Text bold size="20px" margin="0px 0px 0px -48px">
        프로필 설정
      </Text>
      <div></div>
    </Grid>
  );
};

export default ProfileHeader;
