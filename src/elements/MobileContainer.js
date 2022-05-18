import styled from 'styled-components';

const MobileContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  minwidth: 320px;
  min-height: 730px;
  margin: auto;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export default MobileContainer;
