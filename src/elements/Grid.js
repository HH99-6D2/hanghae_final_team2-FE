import React from 'react';
import styled from 'styled-components';

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
  } = props;

  const styles = {
    margin: margin,
    flex,
    justifyContent,
    alignItems,
    direction,
    inlineStyles,
    signupFlex,
  };

  return (
    <Wrapper {...styles} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

Grid.defaultProps = {
  margin: '5px',
  flex: false,
  justifyContent: false,
  alignItems: false,
  direction: '',
  inlineStyles: false,
  onClick: () => {},
};

const Wrapper = styled.div`
  width: 100%;
  margin: ${(props) => props.margin};
  ${(props) => (props.flex ? 'display: flex' : '')};
  ${(props) =>
    props.justifyContent ? `justify-content: ${props.justifyContent}` : ''};
  ${(props) => (props.alignItems ? `align-items: ${props.alignItems}` : '')};
  ${(props) => (props.direction ? `flex-direction: ${props.direction}` : '')};
  ${(props) => (props.inlineStyles ? `${props.inlineStyles}` : '')};
  ${(props) => (props.signupFlex ? `display: flex; align-items: center;` : '')};
`;

export default Grid;
