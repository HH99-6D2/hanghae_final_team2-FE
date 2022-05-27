import React, { useState } from "react";
import { Grid, Text, Image } from "../../elements";
import Like from "../common/Like";
import styled from "styled-components";
//카테고리 선택시 보여줄 채팅방 컴포넌트

const CateChat = (props) => {
  const { setting, list } = props;
  const day = list?.startDate.split(" ");

  if (setting) {
    return (
      <Grid flex direction='row'>
        <Image
          setting
          src='http://res.heraldm.com/content/image/2022/04/23/20220423000095_0.jpg'
        ></Image>
        <Grid between width='317px' height='117px' margin='7px auto'>
          <Grid flex>
            <Grid margin='12px 5px 39px 0px'>
              <Text bold paddingbottom='6px'>
                LG트윈스 이겨라
              </Text>
              <Text color='#767676'>잠실 종합운동장</Text>
              <Grid flex>
                <Text color='#767676'>2022.05.10</Text>
                <Text color='#767676' margin='0px 10px'>
                  7pm
                </Text>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
  return (
    <Grid flex direction='column'>
      <Image CateChat src={list.imageUrl}>
        <Grid position='absolute' left='256px'>
          <Like />
        </Grid>
        <Grid position='absolute' top='12px' left='249px'>
          <Text color='white'>{list.likeCnt}</Text>
        </Grid>
      </Image>
      <Grid between width='317px' height='117px' margin='7px auto'>
        <Grid flex>
          <Grid margin='0px 5px 39px 0px' width='215px'>
            <Text bold paddingbottom='6px'>
              {list.title}
            </Text>
            <Text>{list.spot}</Text>
            <Grid flex>
              <Text>{day[0]?.replaceAll("-", ".")}</Text>
              <Text margin='0px 10px'>{day[1]}</Text>
            </Grid>
          </Grid>
        </Grid>
        <Grid flex>
          <Text>{list.joinCnt}</Text>
          <CountNum src={"/images/joinnum.svg"} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CateChat;

const CountNum = styled.div`
  width: 20px;
  height: 20px;
  background-image: url("${(props) => props.src}");
`;
