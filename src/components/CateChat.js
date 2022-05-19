import * as React from "react";
import { Grid, Text, Image } from "../elements";
import { Like } from "./";
//카테고리 선택시 보여줄 채팅방 컴포넌트

const CateChat = (props) => {
  const { setting } = props;
  if (setting) {
    return (
      <Grid flex direction='row'>
        <Image
          setting
          src='http://newsimg.hankookilbo.com/2019/04/03/201904031896022167_10.jpg'
        ></Image>
        <Grid between width='317px' height='117px' margin='7px auto'>
          <Grid flex>
            <Grid margin='12px 5px 39px 0px'>
              <Text bold paddingbottom='6px'>
                LG트윈스 이겨라
              </Text>
              <Text>잠실 종합운동장</Text>
              <Grid flex>
                <Text>2022.05.10</Text>
                <Text margin='0px 10px'>7pm</Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid flex direction='column'>
      <Image
        CateChat
        src='http://newsimg.hankookilbo.com/2019/04/03/201904031896022167_10.jpg'
      >
        <Grid position='absolute' left='303px'>
          <Like />
        </Grid>
      </Image>
      <Grid between width='317px' height='117px' margin='7px auto'>
        <Grid flex>
          <Grid margin='12px 5px 39px 0px'>
            <Text bold paddingbottom='6px'>
              LG트윈스 이겨라
            </Text>
            <Text>잠실 종합운동장</Text>
            <Grid flex>
              <Text>2022.05.10</Text>
              <Text margin='0px 10px'>7pm</Text>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CateChat;
