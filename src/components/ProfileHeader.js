import React from "react";
import styled from "styled-components";
import { Text, Grid, Button } from "../elements";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../assets/Back.svg";
//메인을 제외한 나머지 페이지들의 헤더

const ProfileHeader = (props) => {
  const navigate = useNavigate();
  const { children, save, back } = props;
  if (save) {
    return (
      <Grid flex alignItems='center' margin='39px 10px 20px 34px'>
        <Back size='30' onClick={() => navigate("/")} />
        <Grid width='160px' margin='0 0 0 63px' textAlign='center'>
          <Text bold size='20px'>
            {children}
          </Text>
        </Grid>
      </Grid>
    );
  }
  if (back) {
    return (
      <Grid flex alignItems='center' margin='39px 10px 20px 34px'>
        <Back size='30' onClick={() => navigate(-1)} />
        <Grid width='160px' margin='0 0 0 63px' textAlign='center'>
          <Text bold size='20px'>
            {children}
          </Text>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid flex alignItems='center' margin='39px 10px 20px 34px'>
      <Back
        size='30'
        onClick={() => {
          navigate("/");
        }}
      />
      <Grid width='160px' margin='0 0 0 55px' textAlign='center'>
        <Text bold size='20px'>
          {children}
        </Text>
      </Grid>
    </Grid>
  );
};

export default ProfileHeader;
