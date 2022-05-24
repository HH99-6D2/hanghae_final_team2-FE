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
import { ReactComponent as Profile1 } from "../assets/Profile1.svg";
import { ReactComponent as Profile2 } from "../assets/Profile2.svg";
import { ReactComponent as Profile3 } from "../assets/Profile3.svg";
import { ReactComponent as Image7 } from "../assets/Image7.svg";
const ProfileImage = (props) => {
  return (
    <Container>
      <MobileContainer>
        <ProfileHeader save>
          프로필 이미지
          <Button mini>저장</Button>
        </ProfileHeader>
        <Profile1 />
        <Profile2 />
        <Image7 />
        <Profile3 />
      </MobileContainer>
    </Container>
  );
};

export default ProfileImage;
