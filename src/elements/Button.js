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
};

const ElButton = styled.div`
  box-sizing: border-box;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
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
  width: 100%;
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
`;

export default Button;
