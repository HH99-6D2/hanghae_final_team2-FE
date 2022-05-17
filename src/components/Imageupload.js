import React, { useState } from "react";
import { Text, Grid, Image } from "../elements";
const Imageupload = (props) => {
  const [image, imageSet] = useState(
    "https://www.missioninfra.net/img/noimg/noimg_4x3.gif"
  );

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
      <form>
        <input
          type='file'
          accept='image/*'
          onChange={(e) => {
            {
              Loadfile(e.target.files[0]);
              console.log(image);
              console.log(e.target.files[0]);
              axios({
                method: "post",
                url: "http://yogoloper.shop/api/images",
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  "Content-Type": "multipart/form-data",
                },
              });
            }
          }}
        />
        <button type='submit'>이미지 저장</button>
        <Image margin='7px auto' CateChat src={image}></Image>
      </form>
    </Grid>
  );
};
export default Imageupload;
