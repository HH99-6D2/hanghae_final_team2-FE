import React from "react";
import { MobileContainer, Container, Grid, Text } from "../elements";
import { ProfileHeader, Alarmlist } from "../components";

//알림 아이콘을 클릭시 보여줄 페이지

const NewAlarm = (props) => {
  return (
    <>
      <Container>
        <MobileContainer>
          <ProfileHeader>새로운 알람</ProfileHeader>
          <Alarmlist />
          <Alarmlist />
          <Alarmlist />
        </MobileContainer>
      </Container>
    </>
  );
};

export default NewAlarm;
