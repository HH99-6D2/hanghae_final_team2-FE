import React, { useEffect, useState } from "react";
import { Checkbox } from "@mui/material";
import axios from "axios";
import { ReactComponent as MainUnLike } from "../../assets/MainUnLike.svg";
import { ReactComponent as MainLike } from "../../assets/MainLike.svg";

const Like = (props) => {
  const [like, setlike] = useState(false);
  const TOKEN = sessionStorage.getItem("token");
  const { roomid } = props;

  const dolike = () => {
    setlike(!like);
    if (like) {
      axios({
        method: "get",
        url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }).then((res) => {
        console.log(res);
      });
    } else {
      axios({
        method: "delete",
        url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
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
