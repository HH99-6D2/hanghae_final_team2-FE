import React, { useState, useRef } from "react";
import { Text, Grid, Image, Button } from "../elements";
import axios from "axios";

const Imageupload = (props) => {
  const fileInput = useRef(null);
  const TOKEN = sessionStorage.getItem("token");
  const [image, imageSet] = useState(
    "https://www.missioninfra.net/img/noimg/noimg_4x3.gif"
  );
  const [sendimage, setsend] = useState(null);

  const dochange = (e) => {
    setsend(e.target.files[0]);
    Loadfile(e.target.files[0]);
    console.log(e.target.files[0]);
    
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    //서버로 이미지 보낼거
    axios({
      method: "POST",
      url: "https://junehan-test.shop/api/user/upload",

      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": `multipart/form-data`,
      },
      data: formData,
    })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 미리보기
  const Loadfile = (Blob) => {
    const formDatas = new FormData();

    formDatas.append("image", Blob);

    const reader = new FileReader();
    reader.readAsDataURL(Blob);
    return new Promise((resolve) => {
      reader.onload = () => {
        imageSet(reader.result);

        resolve();
      };
    });
  };

  return (
    <Grid margin=' 7px auto'>
      <Text color='#4D12FF' bold>
        썸네일
      </Text>

      <input
        type='file'
        name='file'
        accept='image/png,image/gif'
        onChange={dochange}
        style={{ display: "none" }}
        ref={fileInput}
      />

      <Image
        margin='7px auto'
        CateChat
        src={image}
        _onClick={() => {
          fileInput.current.click();
        }}
      ></Image>
    </Grid>
  );
};
export default Imageupload;
