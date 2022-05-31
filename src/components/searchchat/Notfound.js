import React from "react";
import { Grid, Text, Button } from "../../elements";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Notfound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Grid signupFlex textAlign='center' margin='128px 0px 14px 0px'>
        <Text bbold size='21px'>
          찾으신 검색결과에 맞는
          <br />
          채팅방이 없습니다
        </Text>
      </Grid>
      <Grid signupFlex textAlign='center'>
        <Text color='#9B9B9B'>
          새로운 채팅방을 직접 개설해보고
          <br />
          마음 맞는 사람들과 대화해 보세요!
        </Text>
      </Grid>
      <StartBtn
        onClick={() => {
          if (sessionStorage.getItem("token")) {
            navigate("/addchat");
          }
          navigate("/login");
        }}
      >
        채팅방 만들기
      </StartBtn>
    </>
  );
};

export default Notfound;

const StartBtn = styled.div`
  width: 150px;
  height: 40px;
  background: #eb4c3f;
  border-radius: 20px;
  color: white;
  margin: 42px auto;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
`;
