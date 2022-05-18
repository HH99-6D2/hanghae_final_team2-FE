import * as React from "react";
import { Grid, Text, Image, Button } from "../elements";

// 메인화면에 보여줄 추천하는 채팅방 컴포넌트
const MainChat = (props) => {
  return (
    <>
      <Image
        mainchat
        src='http://newsimg.hankookilbo.com/2019/04/03/201904031896022167_10.jpg'
      >
        <Button>채팅방 들어가기</Button>
      </Image>
    </>
  );
};
export default MainChat;
