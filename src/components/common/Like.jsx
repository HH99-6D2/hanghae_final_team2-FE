import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Like = (props) => {
  const { roomid, isLike } = props;
  const [like, setlike] = useState(isLike);

  const dolike = (e) => {
    setlike((prev) => !prev);
    if (like) {
      axios({
        method: "get",
        url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }).then((res) => {
        console.log(res);
      });
    } else {
      axios({
        method: "delete",
        url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }).then((res) => {
        console.log(res);
      });
    }
  };

  return (
    <>
      <label>
        <Input type='checkbox' onClick={dolike} checked={like} />
        {like ? <LikeIcon /> : <UnlikeIcon />}
      </label>
    </>
  );
};

export default Like;

const Input = styled.input`
  display: none;
`;

const LikeIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(/image/like.svg);
`;

const UnlikeIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url(/image/unlike.svg);
`;
