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
  } = props;
  const styles = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
    bg: bg,
    color: color,
  };
  if (large) {
    return (
      <>
        <LargeButton {...styles} onClick={_onClick}>
          {children}
        </LargeButton>
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
  outline: "0px",
};

const ElButton = styled.button`
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

export default Button;
