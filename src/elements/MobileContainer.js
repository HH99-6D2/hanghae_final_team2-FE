import React from "react";
import styled from "styled-components";

const MobileContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  min-width: 375px;
  min-height: 730px;
  width: 100%;
  margin: auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default MobileContainer;
