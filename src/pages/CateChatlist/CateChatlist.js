import React from "react";
import CateChat from "./components/CateChat";
import ProfileHeader from "../common/ProfileHeader";
import { Grid } from "../../elements";
import { ReactComponent as Filter } from "../../assets/Filter.svg";

//카테고리 클릭시 채팅리스트 보여줄 페이지

const CateChatlist = (props) => {
  return (
    <>
      <ProfileHeader search>
        <Grid position='absolute' top='40px' left='325px'>
          <Filter />
        </Grid>
      </ProfileHeader>
      <CateChat />
    </>
  );
};

export default CateChatlist;
