import React, { useState } from "react";
import { Grid, Image, Button } from "../../elements";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CategorySlick = () => {
  const navigate = useNavigate();
  const Setting = [
    {
      src: "/images/sportsmain.svg",
      background: "#4D12FF",
      text: "스포츠",
    },
    {
      src: "/images/concertmain.svg",
      background: "#5D5FEF",
      text: "공연",
    },
    {
      src: "/images/expomain.svg",
      background: "#7879F1",
      text: "박람회 및 전시회",
    },
    {
      src: "/images/tripmain.svg",
      background: "#4D12FF",
      text: "여행",
    },
    {
      src: "/images/eatmain.svg",
      background: "#5D5FEF",
      text: "맛집",
    },
    {
      src: "/images/moviemain.svg",
      background: "#7879F1",
      text: "영화",
    },
  ];

  return (
    <>
      <Scroll>
        {Setting.map((Setting) => {
          return (
            <Grid margin='0px 10px'>
              <CateBtn
                onClick={() =>
                  navigate("/catechat", {
                    state: { category: `${Setting.text}` },
                  })
                }
              >
                <CateImage src={Setting.src} />
                <CateText background={Setting.background}>
                  {Setting.text}
                </CateText>
              </CateBtn>
            </Grid>
          );
        })}
      </Scroll>
    </>
  );
};

const CateBtn = styled.div`
  width: 173px;
  height: 215px;
  cursor: pointer;
`;
const CateText = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: white;
  background: ${(props) => props.background};
  width: 173px;
  height: 62px;
  border-radius: 0px 0px 10px 10px;
  padding-left: 17px;
  padding-top: 20px;
`;

const CateImage = styled.div`
  width: 173px;
  height: 153px;
  background-image: url("${(props) => props.src}");
  background-size: cover;
  border-radius: 10px 10px 0px 0px;
`;

const Scroll = styled.div`
  max-width: 420px;
  display: flex;
  overflow-x: auto;
`;
export default CategorySlick;
