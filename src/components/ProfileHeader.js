import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import { BiArrowBack } from "react-icons/bi";

//메인을 제외한 나머지 페이지들의 헤더

const ProfileHeader = (props) => {
  const { children, save } = props;
  if (save) {
    return (
      <Grid
        flex
        margin="20px 10px"
        justifyContent="space-between"
        alignItems="center"
      >
        <BiArrowBack size="30" />
        <Text bold size="20px" margin="0px 0px 0px 40px">
          {children}
        </Text>
        <Button
          _onClick={() => {
            console.log("클릭했음");
          }}
          mini
        >
          저장
        </Button>
      </Grid>
    );
  }
  return (
    <Grid flex margin="20px 10px" justifyContent="space-between">
      <BiArrowBack size="30" />
      <Text bold size="20px" margin="0px 0px 0px -38px">
        {children}
      </Text>
      <div></div>
    </Grid>
  );
};

export default ProfileHeader;
