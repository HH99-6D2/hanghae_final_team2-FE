import React, { useState } from "react";
import { Text, Grid, Image, Button } from "../elements";
import axios from "axios";

const Imageupload = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const [image, imageSet] = useState(
    "https://www.missioninfra.net/img/noimg/noimg_4x3.gif"
  );
  const [sengimage, setsend] = useState();

  const dochange = async (e) => {
    //서버로 이미지 보낼거
    Loadfile(e.target.files[0]);
    setsend(e.target.files[0]);
    const formData = new FormData();
    formData.append("files", image);

    await axios({
      method: "POST",
      url: "https://yogoloper.shop/api/images",

      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then((res) => {
      console.log(res);
    });
  };

  //미리보기임
  const Loadfile = (Blob) => {
    const formData = new FormData();

    formData.append("image", Blob);

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
      <Text>썸네일</Text>

      <input type='file' accept='image/png,image/gif' onChange={dochange} />

      <Image margin='7px auto' CateChat src={image}></Image>
    </Grid>
  );
};
export default Imageupload;
