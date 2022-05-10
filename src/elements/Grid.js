import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {
    children,
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    margin,
    onClick,
    signupFlex,
    height,
    Category,
    border,
    borderRadius,
    between,
    bottomborder,
  } = props;

  const styles = {
    margin,
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    signupFlex,
    height,
    Category,
    border,
    borderRadius,
    between,
    bottomborder,
  };

  return (
    <Wrapper {...styles} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

Grid.defaultProps = {
  margin: "",
  flex: false,
  justifyContent: false,
  alignItems: false,
  direction: "",
  inlineStyles: false,
  onClick: () => {},
  signupFlex: false,
  bottomborder: false,
};

const Wrapper = styled.div`
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
  ${(props) => (props.flex ? "display: flex" : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : "")};
  ${(props) =>
    props.signupFlex ? `display: flex; justify-content: center;` : ""};
  ${(props) =>
    props.Category ? `position: absolute; top:20px; left:19px;` : ""};
  ${(props) =>
    props.between ? `display: flex; justify-content: space-between;` : ""};
  ${(props) => (props.bottomborder ? `border-bottom:1px solid gray` : "")};
`;

export default Grid;
