import React from "react";
import styled from "styled-components";

const Text = (props) => {
  const {
    bold,
    color,
    size,
    children,
    margin,
    padding,
    paddingbottom,
    onClick,
    width,
    create,
  } = props;

  const styles = {
    bold,
    color,
    size,
    margin,
    padding,
    paddingbottom,
    width,
  };
  if (create) {
    return (
      <Create {...styles} onClick={onClick}>
        {children}
      </Create>
    );
  } else {
    return (
      <ElText {...styles} onClick={onClick}>
        {children}
      </ElText>
    );
  }
};

Text.defaultProps = {
  children: null,
  padding: "",
  bold: false,
  color: "#222831",
  size: "14px",
  margin: false,
  onClick: () => {},
  width: "",
};

const ElText = styled.div`
  padding: ${(props) => props.padding};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  padding-bottom: ${(props) => props.paddingbottom};
  ${(props) => (props.width ? `width: ${props.width};` : "")}
`;

const Create = styled.div`
  padding: ${(props) => props.padding};
  color: #4d12ff;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? "600" : "400")};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  padding-bottom: ${(props) => props.paddingbottom};
  width: ${(props) => (props.width ? "100%" : "75px")};
`;
export default Text;
