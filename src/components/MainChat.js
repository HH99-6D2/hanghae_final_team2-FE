import * as React from "react";
import { Grid, Image, Button, Text } from "../elements";
import { Like } from "../components";
// 메인화면에 보여줄 추천하는 채팅방 컴포넌트
const MainChat = (props) => {
  return (
    <>
      <Image
        mainchat
        position='relative'
        src='http://newsimg.hankookilbo.com/2019/04/03/201904031896022167_10.jpg'
      >
        {/* <Grid>
          <Text color='white' size='25px' bold>
            오래된 빵집 태극당
          </Text>
        </Grid> */}
        <Grid position='absolute' left='270px'>
          <Like />
        </Grid>

        <Button mainlike>채팅방 들어가기</Button>
      </Image>
    </>
  );
};
export default MainChat;
