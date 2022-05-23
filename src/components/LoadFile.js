import React from 'react';

// 미리보기
export function Loadfile() {
  const [image, imageSet] = useState(
    'https://www.missioninfra.net/img/noimg/noimg_4x3.gif',
  );

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
}
