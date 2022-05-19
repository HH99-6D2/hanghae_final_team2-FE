import eslintConfigReactApp from "eslint-config-react-app";
import React from "react";
import styled, { withTheme } from "styled-components";

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
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  ${(props) => (props.position ? `position:${props.position}` : "")};
  text-align: center;
  width: 80%;
  border: 0px;
  outline: 0px;
`;

const LargeButton = styled.button`
  box-sizing: border-box;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  text-align: center;
  ${(props) => (props.width ? `width: ${props.width};` : "100%")};
  ${(props) => (props.border ? `border: ${props.border};` : "")};
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
`;

const MiniButton = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  text-align: center;
  width: "";
  position: absolute;
  right: 20px;
  top: 30px;
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
  padding:12px 30px;
`;

export default Button;
