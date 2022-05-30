import React, { useState } from "react";
import { Dateset, Imageupload, Time, KakaoMapEx } from "../components";
import { Grid, Input, Text, Button } from "../elements";
import ProfileHeader from "../components/common/ProfileHeader";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  const [cate, setCate] = useState("스포츠");

  const KakaoMapData = (result) => {
    setplace(result);
  };
  console.log(cate);
  const region = place.address_name?.split(" ");
  const placename = place.place_name?.split(" ");

  const onChange = (e) => {
    setCate(e.target.id);
  };
  const category = [
    {
      src: "/images/categorysports.svg",
      text: "스포츠",
    },
    {
      src: "/images/categoryconcert.svg",
      text: "공연",
    },
    {
      src: "/images/categoryexpo.svg",
      text: "박람회 및 전시회",
    },
    {
      src: "/images/categorytrip.svg",
      text: "여행",
    },
    {
      src: "/images/categoryeat.svg",
      text: "맛집",
    },
    {
      src: "/images/categorymovie.svg",
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
                  category: "여행",
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
        <Container>
          {category.map((category) => {
            return (
              <Item checked={cate === category.text}>
                <label>
                  {category}
                  <Radio
                    type='radio'
                    id={category.text}
                    name='cate'
                    checked={cate === category.text}
                    onChange={onChange}
                  >
                    <Image src={category.src} />
                    {category.text}
                  </Radio>
                </label>
              </Item>
            );
          })}
        </Container>
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 19px;
  margin: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${({ checked }) => checked && "background-color: #4d12ff; color: #fff;"}
  &:hover {
    background-color: #4d12ff;
    color: white;
  }
`;

const Image = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  background-image: url("${(props) => props.src}");
`;

const Radio = styled.input`
  display: none;
`;
export default CreateChat;
