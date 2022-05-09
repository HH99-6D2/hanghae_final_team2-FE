import * as React from 'react';
import { BsHeartFill } from 'react-icons/bs';
import { Grid, Text } from '../elements';
const MainChat = (props) => {
  return (
    <>
      <Grid
        between
        width='278px'
        height='114px'
        margin='7px 14px'
        border='1px solid black'
        borderRadius='15px'
      >
        <Grid>
          <Grid margin='19px 25px 12px 28px'>
            <Text>title</Text>
            <Grid>
              <Text>위치</Text>
              <Text>날짜</Text>
            </Grid>
          </Grid>
          <Grid margin='15px 22px 12px 28px'>
            <Text>채팅 인원 00/000명</Text>
          </Grid>
        </Grid>
        <Grid>
          <Text>123</Text>
          <Text>*</Text>
        </Grid>
      </Grid>
    </>
  );
};

export default MainChat;
