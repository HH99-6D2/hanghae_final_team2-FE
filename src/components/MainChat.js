import * as React from "react";
import { BsHeartFill } from "react-icons/bs";
import { Grid, Text } from "../elements";

//메인화면에 보여줄 새로운 채팅방 리스트

const MainChat = (props) => {
  return (
    <>
      <Grid
        between
        width="320px"
        height="132px"
        margin="7px auto"
        border="1px solid black"
        borderRadius="15px"
      >
        <Grid>
          <Grid margin="19px 25px 12px 28px">
            <Text bold>LG트윈스 이겨라</Text>
            <Grid flex>
              <Text bold>잠실 종합운동장</Text>
              <Text bold margin="0px 15px">
                2022.05.10
              </Text>
            </Grid>
          </Grid>
          <Grid margin="15px 22px 12px 28px">
            <Text>채팅 인원 00/000명</Text>
          </Grid>
        </Grid>
        <Grid flex>
          <Text>123</Text>
          <Text>*</Text>
        </Grid>
      </Grid>
    </>
  );
};

export default MainChat;
