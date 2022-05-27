import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import ProfileHeader from "../components/common/ProfileHeader";
import { Grid, Text } from "../elements";

//햄버거바 ->앱 알림설정 클릭시 보여줄 페이지

const AlarmSetting = (props) => {
  const [check, setCheck] = React.useState(true);
  const handleChange = () => {
    console.log(`현재 control 값은,${check}`);
    setCheck(!check);
  };
  return (
    <>
      <ProfileHeader>알림 설정</ProfileHeader>
      <Grid between width='342px' height='132px' margin='8px 27px'>
        <Grid>
          <Grid margin='19px 25px 12px 28px'>
            <Text bold>알림 사용 안함</Text>
            <Grid margin='10px 0px'>
              <Text>
                좋아용를 누른 방이 개설되거나 <br />
                각종 행사를 앱 푸시 알람으로 알려드려요
              </Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid flex>
          <FormGroup>
            <FormControlLabel
              onClick={handleChange}
              control={<Switch defaultChecked />}
            />
          </FormGroup>
        </Grid>
      </Grid>
    </>
  );
};

export default AlarmSetting;
