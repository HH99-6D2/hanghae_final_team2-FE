import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
//메인을 제외한 나머지 페이지들의 헤더

const ProfileHeader = (props) => {
  const navigate = useNavigate();
  const { children, save } = props;
  if (save) {
    return (
      <Grid flex alignItems="center" margin="39px 10px 20px 34px">
        <BiArrowBack size="30" onClick={() => navigate("/")} />
        <Grid width="160px" margin="0 0 0 63px" textAlign="center">
          <Text bold size="20px">
            {children}
          </Text>
        </Grid>
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
    <Grid flex alignItems="center" margin="39px 10px 20px 34px">
      <BiArrowBack
        size="30"
        onClick={() => {
          navigate("/");
        }}
      />
      <Grid width="160px" margin="0 0 0 55px" textAlign="center">
        <Text bold size="20px">
          {children}
        </Text>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
