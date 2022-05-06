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
    signupFlex,
  };

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

export default Grid;
