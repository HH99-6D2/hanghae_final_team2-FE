import React, { useState } from 'react';
import { Grid, Button } from '../elements';
import ProfileHeader from '../components/common/ProfileHeader';
import { useNavigate } from 'react-router-dom';
const ProfileImage = (props) => {
	const [select, setselect] = useState('');
	console.log(select);
	const navigate = useNavigate();

	const Settings = [
		'/images/Profile1.svg',
		'/images/Profile2.svg',
		'/images/Profile3.svg',
		'/images/Profile4.svg',
		'/images/Profile5.svg',
		'/images/Profile6.svg',
		'/images/Profile7.svg',
		'/images/Profile8.svg',
		'/images/Profile9.svg',
		'/images/Profile10.svg',
	];

	return (
		<>
			<ProfileHeader save>
				프로필 이미지
				<Button
					mini
					_onClick={() => navigate('/profile', { state: { cType: select } })}
				>
					저장
				</Button>
			</ProfileHeader>
		</>
	);
};

export default ProfileImage;
