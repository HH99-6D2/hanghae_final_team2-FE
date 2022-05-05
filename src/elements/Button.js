import React from "react";
import styled, { withTheme } from "styled-components";

const Button = (props) => {
  const { children, text, _onClick, width, height, padding, margin } = props;
  const styles = {
    width: width,
    height: height,
    padding: padding,
    margin: margin,
  };
  return (
    <>
      <ClickButton {...styles} onClick={_onClick}>
        {text}
      </ClickButton>
    </>
  );
};

Button.defaultProps = {
  children: null,
  text: false,
  _onClick: () => {},
  color: "white",
  height: "37px",
  margin: false,
  padding: "10px 20px",
  bg: "#212121",
};

const ClickButton = styled.button`
  box-sizing: border-box;
  border-radius: 15px;
  padding: ${(props) => props.padding};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")};
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")};
  ${(props) => (props.color ? `color: ${props.color};` : "")};
  text-align: center;
  width: 80%;
`;
export default Button;
