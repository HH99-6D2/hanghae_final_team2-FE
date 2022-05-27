import React, { useState } from "react";
import { Dateset, Imageupload, Time } from "../components";
import { Grid, Input, Text, Button } from "../elements";
import axios from "axios";
import ProfileHeader from "../components/common/ProfileHeader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateChat = (props) => {
  const TOKEN = sessionStorage.getItem("token");
  const [name, inputname] = useState("");
  const [tag, inputtag] = useState("");
  const navigate = useNavigate();
  // const [active, setActive] = useState(type[0]);

  const category = [
    {
      src: "",
      text: "스포츠",
    },
    {
      src: "",
      text: "전시회",
    },
    {
      src: "",
      text: "콘서트",
    },
  ];

  return (
    <>
      <Grid>
        <ProfileHeader save>
          <Button
            cursor='pointer'
            _onClick={() => {
              console.log("채팅방 수정하는 버튼");
            }}
            mini
          >
            저장
          </Button>
          채팅방 수정
        </ProfileHeader>
      </Grid>

      <Imageupload />
      <Grid margin=' 7px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          채팅방 이름
        </Text>
        <Input
          placeholder='원래 채팅방 이름'
          create
          _onChange={(e) => {
            inputname(e.target.value);
          }}
        />
      </Grid>
      <Grid margin=' 7px auto'>
        <Text padding='3px 16px' color='#4D12FF' bold>
          카테고리 선택
        </Text>
        <Grid flex>
          {/* {category.map((Category) => {
              return (
                <ButtonToggle
                  value={location}
                  key={Category}
                  active={active === Category}
                  Category
                  src={Category.src}
                  onClick={() => {
                    setActive(Category);
                  }}
                >
                  {Category.text}
                </ButtonToggle>
              );
            })} */}
        </Grid>
      </Grid>

      <Grid margin='0px auto'>
        <Text paddingbottom='17px' color='#4D12FF' bold>
          태그 추가
        </Text>
        <Input
          placeholder='원래있던 태그'
          create
          _onChange={(e) => {
            inputtag(e.target.value);
          }}
        />
      </Grid>
      <Grid margin='18px auto'>
        <Text color='#4D12FF' bold>
          일정
        </Text>
        <Dateset />
        <Time />
      </Grid>
    </>
  );
};

// const ButtonToggle = styled(Btn)`
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
