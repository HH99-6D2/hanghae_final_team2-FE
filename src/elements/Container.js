<<<<<<< HEAD
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
=======
import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  max-width: 428px;
  width: 100%;
  min-height: 90vh;
  margin: auto;
  background: #e9c1c15e;
>>>>>>> 6c6013bdfafc664ea6e76ee67f339bb386669b7e
`;

export default Container;
