import React, { useState, useRef } from 'react';
import { Text, Grid, Image, Button } from '../elements';
import axios from 'axios';

const Imageupload = (props) => {
  const fileInput = useRef(null);
  const TOKEN = sessionStorage.getItem('token');
  const [image, imageSet] = useState(
    'https://www.missioninfra.net/img/noimg/noimg_4x3.gif',
  );
  const [sendimage, setsend] = useState(null);

  const dochange = (e) => {
    //서버로 이미지 보낼거

    // console.log(e.target.files[0]);
    Loadfile(e.target.files[0]);
    setsend(e.target.files[0]);
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append('image', e.target.value);
    console.log(e.target.files[0]);

    for (const keyValue of formData) console.log(keyValue);

    axios({
      method: 'POST',
      url: 'https://yogoloper.shop/api/images',

      headers: {
        Authorization: `Bearer ${TOKEN}`,
        'content-type': 'application/json;charset=UTF-8',
        accept: 'application/json',
      },
      data: e.target.value,
    }).then((res) => {
      console.log(res);
    });
  };

  // 미리보기
  const Loadfile = (Blob) => {
    const formData = new FormData();

    formData.append('image', Blob);

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
      <form encType='multipart/form-data'>
        <input
          type='file'
          accept='image/png,image/gif,image/jpg,image/jpeg,image/svg'
          onChange={dochange}
          style={{ display: 'none' }}
          ref={fileInput}
        />
      </form>
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
