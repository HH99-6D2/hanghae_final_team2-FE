import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  MobileContainer,
  Grid,
  Image,
  Text,
  Buttons,
} from "../elements";
import { useNavigate } from "react-router-dom";
import profile from "../assets/profile.svg";
import addChat from "../assets/addChat.svg";
import editChat from "../assets/editChat.svg";
import blackList from "../assets/blackList.svg";
import appAlert from "../assets/appAlert.svg";
import askService from "../assets/askService.svg";
import cancel from "../assets/cancel.svg";

const Setting = [
  {
    url: addChat,
    title: "채팅방 만들기",
    navi: "/addchat",
  },
  {
    url: editChat,
    title: "채팅방 관리",
    navi: "/chatlist",
  },
  {
    url: blackList,
    title: "차단 목록",
  },
  {
    url: appAlert,
    title: "앱 알림 설정",
    navi: "/alarmsetting",
  },
];

const Support = [
  {
    url: "",
    title: "채팅방 만들기",
  },
  {
    url: askService,
    title: "이용 약관 및 문의",
  },
];

function Sidebar(props) {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem("nick");
  const token = sessionStorage.getItem("token");
  return (
    <React.Fragment>
      <Container>
        <MobileContainer>
          <Grid
            margin='25px 28px 0 auto'
            cursor='pointer'
            onClick={() => {
              window.location.replace("/");
            }}
          >
            <Image src={cancel} size='22' />
          </Grid>
          <Grid profileFlex margin='17px 33px'>
            <Image src={profile} size='58'></Image>
            <Grid margin='0 0 0 11px'>
              <Text size='21px' padding='0 0 7px 0'>
                {nickname} 님
              </Text>
              <Text
                size='12px'
                onClick={() => {
                  if (token) {
                    navigate("/profile");
                  } else {
                    navigate("/login");
                  }
                }}
              >
                프로필수정
              </Text>
            </Grid>
          </Grid>
          <Grid margin='46px 32px 27px 30px'>
            <Text size='16px' bold>
              Setting
            </Text>
            <Grid profileFlex direction='column' margin='16px 0'>
              {Setting.map((Setting) => {
                return (
                  <Buttons
                    Sidebar
                    src={Setting.url}
                    _onClick={() => {
                      if (token) {
                        navigate(`${Setting.navi}`);
                      } else {
                        navigate("/login");
                      }
                    }}
                  >
                    {Setting.title}
                  </Buttons>
                );
              })}
            </Grid>
          </Grid>
          <Grid margin='27px 32px 53px 30px'>
            <Text size='16px' bold>
              Support
            </Text>
            <Grid profileFlex direction='column' margin='16px 0'>
              {Support.map((Support) => {
                return (
                  <Buttons Sidebar src={Support.url}>
                    {Support.title}
                  </Buttons>
                );
              })}
            </Grid>
          </Grid>
        </MobileContainer>
      </Container>
    </React.Fragment>
  );
}

export default Sidebar;
