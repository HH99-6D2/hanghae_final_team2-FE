import styled from 'styled-components';

const Profile = ({ type, number }) => {
	if (type === 'small') {
		return <SmallProfile number={number} />;
	}
};

export default Profile;

const SmallProfile = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-image: url(${({ number }) => `/images/profile${number}.svg`});
	background-size: cover;
`;
