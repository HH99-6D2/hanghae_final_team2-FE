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
`;

export default Container;
