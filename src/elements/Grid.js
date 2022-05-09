import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    children,
    width,
    height,
    padding,
    margin,
    bg,
    borderRadius,
    border,
    _onClick,
    signupFlex,
    wrapper,
  } = props;

  const styles = {
    children,
    width,
    height,
    padding: padding,
    margin: margin,
    bg,
    borderRadius,
    border,
    margin,
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    signupFlex,
    height,
  };

  if (wrapper) {
    return (
      <Wrapper {...styles} onClick={_onClick}>
        {children}
      </Wrapper>
    );
  }

  return (
    <ElGrid {...styles} onClick={_onClick}>
      {children}
    </ElGrid>
  );
};

Grid.defaultProps = {
  children: null,
  width: '',
  height: '',
  maxWidth: '',
  minWidth: '',
  padding: '',
  margin: '',
  bg: '',
  borderRadius: '',
  border: '',
  _onClick: () => {},
};

const ElGrid = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  ${(props) => (props.padding ? `padding : ${props.padding}; ` : '')};
  ${(props) => (props.margin ? `margin : ${props.margin}; ` : '')};
  ${(props) => (props.bg ? `background-color : ${props.bg}` : '')};
  ${(props) =>
    props.borderRadius ? `border-radius : ${props.borderRadius};` : ''};
  ${(props) => (props.border ? `border : ${props.border};` : '')};
  ${(props) => (props.signupFlex ? `display: flex; align-items: center;` : '')};
`;

const Wrapper = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  ${(props) => (props.flex ? 'display: flex' : '')};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : '')};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : '')};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : '')};
  ${(props) =>
    props.signupFlex ? `display: flex; justify-content: center;` : ''};
`;

export default Grid;
