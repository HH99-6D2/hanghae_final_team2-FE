import React, { useState } from "react";
import {
  MobileContainer,
  Grid,
  Button,
  Text,
  Image,
  Input,
  Container,
} from "../elements";
import { ProfileHeader } from "../components";
import Profile1 from "../assets/Profile1.svg";
import Profile2 from "../assets/Profile2.svg";
import Profile3 from "../assets/Profile3.svg";
import Profile4 from "../assets/Profile4.svg";
import Profile5 from "../assets/Profile5.svg";
import Profile6 from "../assets/Profile6.svg";
import Profile7 from "../assets/Profile7.svg";
import Profile8 from "../assets/Profile8.svg";
import Profile9 from "../assets/Profile9.svg";
import Profile10 from "../assets/Profile10.svg";
import { useNavigate } from "react-router-dom";
const ProfileImage = (props) => {
  const [select, setselect] = useState("");
  console.log(select);
  const navigate = useNavigate();

  return (
    <Container>
      <MobileContainer>
        <ProfileHeader save>
          프로필 이미지
          <Button
            mini
            _onClick={() => navigate("/profile", { state: { cType: select } })}
          >
            저장
          </Button>
        </ProfileHeader>
        <Grid flex justifyContent='space-evenly'>
          <img
            src={Profile1}
            onClick={() => {
              setselect("1");
            }}
          />
          <img
            src={Profile2}
            onClick={() => {
              setselect("2");
            }}
          />
        </Grid>
        <Grid flex justifyContent='space-evenly' margin='22px 0px'>
          <img
            margin='17px 17px'
            src={Profile3}
            onClick={() => {
              setselect("3");
            }}
          />
          <img
            src={Profile4}
            onClick={() => {
              setselect("4");
            }}
          />
        </Grid>
        <Grid flex justifyContent='space-evenly'>
          <img
            src={Profile5}
            onClick={() => {
              setselect("5");
            }}
          />
          <img
            src={Profile6}
            onClick={() => {
              setselect("6");
            }}
          />
        </Grid>
        <Grid flex justifyContent='space-evenly' margin='22px 0px'>
          <img
            margin='17px 17px'
            src={Profile7}
            onClick={() => {
              setselect("7");
            }}
          />
          <img
            src={Profile8}
            onClick={() => {
              setselect("8");
            }}
          />
        </Grid>
        <Grid flex justifyContent='space-evenly'>
          <img
            src={Profile9}
            onClick={() => {
              setselect("9");
            }}
          />
          <img
            src={Profile10}
            onClick={() => {
              setselect("10");
            }}
          />
        </Grid>
      </MobileContainer>
    </Container>
  );
};

export default ProfileImage;
