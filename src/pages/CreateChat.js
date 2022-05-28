import React, { useState } from "react";
import { Grid, Input, Text, Button } from "../elements";
import ProfileHeader from "../components/common/ProfileHeader";
import { useNavigate } from "react-router-dom";

import categorysports from "../assets/categorysports.svg";

const CreateChat = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const [name, inputname] = useState("");
  const [tag, inputtag] = useState("");
  const [start, setstart] = useState("");
  const [end, setend] = useState("");
  const [starttime, setstarttime] = useState("");
  const [endtime, setendtime] = useState("");
  const [url, seturl] = useState("");
  const [place, setplace] = useState("");
  const navigate = useNavigate();

  const KakaoMapData = (result) => {
    setplace(result);
  };

  const region = place.address_name?.split(" ");
  const placename = place.place_name?.split(" ");

  const category = [
    {
      src: "",
      text: "스포츠",
    },
    {
      src: "",
      text: "공연",
    },
    {
      src: "",
      text: "박람회 및 전시회",
    },
    {
      src: "",
      text: "여행",
    },
    {
      src: "",
      text: "맛집",
    },
    {
      src: "",
      text: "영화",
    },
  ];

  return (
    <>
      <Grid>
        <ProfileHeader save>
          <Button
            cursor='pointer'
            _onClick={() => {
              navigate("/addchatcheck", {
                state: {
                  title: name,
                  place: place,
                  category: "스포츠",
                  region: region,
                  image: url,
                  tag: tag,
                  placename: placename,
                  startdate: start,
                  enddate: end,
                  starttime: starttime,
                  endtime: endtime,
                },
              });
            }}
            mini
          >
            저장
          </Button>
          채팅방 생성
        </ProfileHeader>
      </Grid>

      <Imageupload seturl={seturl} />
      <Grid margin=' 7px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          채팅방 이름
        </Text>
        <Input
          placeholder='채팅방 제목을 입력해주세요'
          create
          _onChange={(e) => {
            inputname(e.target.value);
          }}
        />
      </Grid>
      <Grid margin=' 7px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          카테고리 선택
        </Text>

        <Button src={categorysports} category>
          <Text>스포츠</Text>
        </Button>
        <Grid>
          <img src={categorysports} border='1px solid black'></img>
        </Grid>
        {/* {category.map((Category) => {
            //   return (
            //     <ButtonToggle
            //       value={location}
            //       key={Category}
            //       active={active === Category}
            //       Category
            //       src={Category.src}
            //       onClick={() => {
            //         setActive(Category);
            //       }}
            //     >
            //       {Category.text}
            //     </ButtonToggle>
            //   );
            // })} */}
      </Grid>

      <Grid margin='0px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          태그 추가
        </Text>
        <Input
          placeholder='#강남#코엑스#영화관'
          create
          _onChange={(e) => {
            inputtag(e.target.value);
          }}
        />
      </Grid>
      <Grid margin='18px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          위치정보
        </Text>
        <KakaoMapEx propFunction={KakaoMapData} />
      </Grid>
      <Grid margin='18px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          일정
        </Text>
        <Dateset setstart={setstart} setend={setend} />
        <Time setstarttime={setstarttime} setendtime={setendtime} />
      </Grid>
    </>
  );
};

// const ButtonToggle = styled(Button)`
//   opacity: 1;
//   width: 132px;
//   height: 44px;
//   margin: 6px;
//   border: 0px;
//   border-radius: 10px;
//   font-size: 14px;
//   cursor: pointer;
//   ${({ active }) =>
//     active &&
//     `
//     opacity: 1;
//     color: white;
//     background-color: #333333;
//     border-radius: 10px
//     font-size: 14px;
//     `};
//   &:hover {
//     transition: all 0.5s;
//     background-color: #23c8af;
//     color: white;
//   }
// `;

export default CreateChat;
