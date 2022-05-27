import React from "react";
import styled, { withTheme } from "styled-components";
import Text from "./Text";
import Image from "./Image";
import Grid from "./Grid";

const Button = (props) => {
  const {
    children,
    text,
    _onClick,
    width,
    height,
    padding,
    margin,
    large,
    bg,
    color,
    category,
    inlineStyles,
    mini,
    position,
    mainlike,
    border,
    cursor,
    chatCateBtn,
    textAlign,
    profile,
    bordebottom,
    bold,
    src,
  } = props;
  const styles = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    bg: bg,
    color: color,
    inlineStyles: inlineStyles,
    mini: mini,
    _onClick: _onClick,
    position: position,
    border: border,
    cursor: cursor,
    textAlign: textAlign,
    profile: profile,
    bordebottom: bordebottom,
    bold: bold,
    src: src,
  };
  if (large) {
    return (
      <>
        <LargeButton {...styles} onClick={_onClick}>
          {children}
        </LargeButton>
      </>
    );
  } else if (category) {
    return (
      <>
        <Grid profileFlex>
          <CateButton {...styles} onClick={_onClick}>
            <Image Profile src={props.src} size='28'></Image>
            {children}
          </CateButton>
        </Grid>
      </>
    );
  } else if (chatCateBtn) {
    return (
      <>
        <HomeCateBtn {...styles} onClick={_onClick}>
          <Text padding='20px 100px 20px 18px'>{children}</Text>
        </HomeCateBtn>
      </>
    );
  } else if (mini) {
    return (
      <>
        <MiniButton {...styles} onClick={_onClick}>
          {children}
        </MiniButton>
      </>
    );
  } else if (mainlike) {
    return (
      <>
        <MainBtn {...styles} onClick={_onClick}>
          {children}
        </MainBtn>
      </>
    );
  } else if (profile) {
    return (
      <>
        <ProfileBtn {...styles} onClick={_onClick}>
          {children}
        </ProfileBtn>
      </>
    );
  }
  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
        {children}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  children: null,
  _onClick: () => {},
  color: "black",
  height: "37px",
  margin: false,
  padding: "10px 20px",
  bg: "white",
  border: "0px",
  border: "none",
};

const ElButton = styled.div`
  box-sizing: border-box;
  border-radius: 10px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.position ? `position:${props.position}` : "")};
  text-align: ${(props) => (props.textAlign ? "center" : "")};
  ${(props) => (props.width ? `width: ${props.width};` : "")};
  border: 0px;
  outline: 0px;
  cursor: pointer;
`;

const ProfileBtn = styled.div`
  box-sizing: border-box;

  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.position ? `position:${props.position}` : "")};
  text-align: ${(props) => (props.textAlign ? "center" : "")};
  ${(props) => (props.width ? `width: ${props.width};` : `width:80%`)};
  border: 0px;
  outline: 0px;
  cursor: pointer;
  ${(props) =>
    props.bordebottom ? `border-bottom: ${props.bordebottom};` : ""};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
`;
const LargeButton = styled.button`
  box-sizing: border-box;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  text-align: ${(props) => (props.text - align ? "100%" : "75px")};
  ${(props) => (props.width ? `width: ${props.width};` : `width:100%`)};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
  cursor: pointer;
`;

const CateButton = styled.div`
  box-sizing: border-box;
  border-radius: 19px;
  padding: 5px 10px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : "")};
  width: 90px;
  height: 40px;
  margin: 15px;
  position: relative;
  cursor: pointer;
  box-shadow: 0px 0px 10px;
`;

const MiniButton = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  padding: 6px 10px;
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color: #4d12ff;
  color: white;
  text-align: center;

  position: absolute;
  right: 16px;
  top: 36px;
  cursor: pointer;
`;

const MainBtn = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  background-color:white;
  color: #4d12ff;
  position:absolute;
  text-align: center;
  width: 130px
  border: 0px;
  outline: 0px;
  height:40px;
  bottom:35px;
  left:30px;
  padding:9px 30px;
  cursor: pointer;
  box-shadow:2px 2px 10px rgba(0, 0, 0, 0.15);
`;

const HomeCateBtn = styled.div`
  width: 174px;
  height: 63px;
  box-sizing: border-box;
  text-align: start;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default Button;
