import eslintConfigReactApp from "eslint-config-react-app";
import React from "react";
import styled, { withTheme } from "styled-components";
import Text from "./Text";

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
    homeCateBtn,
    textAlign,
    profile,
    bordebottom,
    bold,
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
        <CateButton {...styles} onClick={_onClick}>
          {children}
        </CateButton>
      </>
    );
  } else if (homeCateBtn) {
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
  border-radius: 20px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : "")};
  text-align: center;
  min-width: 90px;
  height: 70px;
  margin: 15px;
  position: relative;
  cursor: pointer;
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
  
`;

const HomeCateBtn = styled.div`
  width: 174px;
  height: 63px;
  box-sizing: border-box;
  text-align: start;
`;

export default Button;
