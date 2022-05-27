import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Image, Text } from "../../elements";

import SidebarMenu from "../../assets/sidebarMenu.svg";
import Search from "../../assets/Search.svg";
import Alarm from "../../assets/alarm.svg";
import AlarmOn from "../../assets/alarmOn.svg";
import MainLogo from "../../assets/MainLogo.svg";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");
  return (
    <>
      <Background>
        <Grid between alignItems='center' height='72px'>
          <Image
            src={SidebarMenu}
            size='28'
            margin='0 22px'
            _onClick={() => {
              navigate("/Sidebar");
            }}
          />
          <img src={MainLogo} />
          <Grid between margin='0 22px 0 0'>
            <Image
              src={Search}
              size='28'
              _onClick={() => {
                navigate("/Search");
              }}
            />
            <Image
              src={AlarmOn}
              size='28'
              _onClick={() => {
                if (token) {
                  navigate("/newalarm");
                } else {
                  navigate("/login");
                }
              }}
            />
          </Grid>
        </Grid>
      </Background>
    </>
  );
};
const Background = styled.div`
  background: #7879f1;
  max-width: 420px;
  width: 100%;
  position: fixed;
  z-index: 3;
`;

export default Header;
