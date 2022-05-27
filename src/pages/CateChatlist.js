import React, { useState, useEffect } from "react";
import CateChat from "../components/categorychat/CateChat";
import ProfileHeader from "../components/common/ProfileHeader";
import { Grid } from "../elements";
import { ReactComponent as Filter } from "../assets/Filter.svg";
import { useLocation } from "react-router-dom";
import axios from "axios";
//카테고리 클릭시 채팅리스트 보여줄 페이지

const CateChatlist = (props) => {
  const location = useLocation();
  const [send, setsend] = useState(location.state);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://yogoloper.shop/api/rooms/search?category=${location.state.category}`,
    }).then((res) => {
      console.log(res);
    });
  }, []);
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
