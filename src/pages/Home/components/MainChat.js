import * as React from "react";
import { Grid, Image, Button } from "../../../elements";
import { Like } from "../../../components";
// 메인화면에 보여줄 추천하는 채팅방 컴포넌트
const MainChat = (props) => {
  const { src } = props;
  return (
    <Image background mainchat position='relative' src={src}>
      <Grid position='absolute' left='270px'>
        <Like />
      </Grid>

      <Button mainlike>채팅방 들어가기</Button>
    </Image>
  );
};
export default MainChat;
