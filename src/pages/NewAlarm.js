import React from "react";
import Alarmlist from "../components/alarm/Alarmlist";
import ProfileHeader from "../components/common/ProfileHeader";
//알림 아이콘을 클릭시 보여줄 페이지

const NewAlarm = (props) => {
  return (
    <>
      <ProfileHeader>새로운 알람</ProfileHeader>
      <Alarmlist />
      <Alarmlist />
      <Alarmlist />
    </>
  );
};

export default NewAlarm;
