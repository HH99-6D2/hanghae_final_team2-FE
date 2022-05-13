import React, { useState } from "react";
import { Text, Grid, Image } from "../elements";
const Imageupload = (props) => {
  const [image, imageSet] = useState(
    "https://www.missioninfra.net/img/noimg/noimg_4x3.gif"
  );

  const Loadfile = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        imageSet(reader.result);

        resolve();
      };
    });
  };

  return (
    <Grid margin=" 7px auto">
      <Text>썸네일</Text>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          {
            Loadfile(e.target.files[0]);
            console.log(image);
          }
        }}
      />
      <Image margin="7px auto" CateChat src={image}></Image>
    </Grid>
  );
};
export default Imageupload;
