import styled from "styled-components";

const Profile = ({ type, number }) => {
  if (type === 'small') {
    return <SmallProfile number={number} />;
  }
};

export default Profile;

const SmallProfile = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-image: url(${({ number }) => `/images/profile${number}.svg`})
`;
