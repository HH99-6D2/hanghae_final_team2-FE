import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  max-width: 420px;
  /* min-height: 90vh; */
  margin: auto;
  background: #ffffff;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export default Container;
