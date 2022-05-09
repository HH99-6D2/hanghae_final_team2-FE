import styled from 'styled-components';

const MobileContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  minwidth: 320px;
  height: 730px;
  margin: auto;
  background: #d3d3d3;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default MobileContainer;
