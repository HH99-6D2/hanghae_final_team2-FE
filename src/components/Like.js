import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import { MdOutlineSportsBaseball } from "react-icons/md";
import axios from "axios";
import { ReactComponent as MainUnLike } from "../assets/MainUnLike.svg";
import { ReactComponent as MainLike } from "../assets/MainLike.svg";

const Like = () => {
  const [like, setlike] = useState(false);
  const TOKEN = sessionStorage.getItem("token");

  const text = like ? "좋아요+1" : "좋아요0";
  console.log(text);

  const dolike = () => {
    //  채팅방 하트 클릭시 그때 채팅방의 roomid가져와서 url끝에 넣어주기
    setlike(!like);
    if (like) {
      axios({
        method: "get",
        url: "https://yogoloper.shop/api/rooms/likes/1",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((res) => {
        console.log(res);
      });
    } else {
      axios({
        method: "delete",
        url: "https://yogoloper.shop/api/rooms/likes/1",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <Checkbox
      onClick={dolike}
      icon={<MainUnLike />}
      checkedIcon={<MainLike />}
      
    ></Checkbox>
  );
};

export default Like;
