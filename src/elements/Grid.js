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
    onClick,
  } = props;

  const styles = {
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
  };

  return (
    <Wrapper {...styles} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

Grid.defaultProps = {
  flex: false,
  justifyContent: false,
  alignItems: false,
  direction: "",
  inlineStyles: false,
  onClick: () => {},
};

const Wrapper = styled.div`
  width: 100%;
  ${(props) => (props.flex ? "display: flex" : "")};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ""};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : "")};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : "")};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : "")};
`;

export default Grid;
