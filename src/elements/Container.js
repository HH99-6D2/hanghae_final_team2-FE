import React, { Children } from 'react';
import styled from 'styled-components';

const Container = (props) => {
  const { width, maxWidth, padding, margin, center, mainFlex } = props;
  const styles = {
    width: width,
    maxWidth,
    padding: padding,
    margin: margin,
    center,
    mainFlex,
  };

  return (
    <React.Fragment>
      <ElContainer {...styles}>{Children}</ElContainer>
    </React.Fragment>
  );
};

Container.defaultProps = {
  children: null,
  margin: '',
  padding: '',
  maxWidth: '',
};

const ElContainer = styled.div`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  max-width: ${(props) => props.maxWidth};
  position: relative;
  ${(props) => (props.center ? `text-align: center;` : '')};
  ${(props) =>
    props.mainFlex ? `display : flex; align-items : center ;` : ''};
`;

export default Container;
