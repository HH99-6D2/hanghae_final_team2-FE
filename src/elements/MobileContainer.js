import styled from "styled-components";

const MobileContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;

  width: 100%;
  min-height: 100vh;
  margin: auto;
  background: #d3d3d3;
`;

export default MobileContainer;
