import React, { useState } from 'react';
import ProfileHeader from '../components/common/ProfileHeader';
import { Grid, Button, Text, Image, Input } from '../elements';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// 햄버거바->프로필 수정 클릭시 보여줄 페이지

const MyProfile = (props) => {
	const TOKEN = sessionStorage.getItem('token');
	const SoTOKEN = sessionStorage.getItem('social');
	const RETOKEN = sessionStorage.getItem('refresh');
	const nickname = sessionStorage.getItem('nick');
	const id = sessionStorage.getItem('id');
	const navigate = useNavigate();

	const [nick, inputnick] = useState(nickname);
	const location = useLocation();
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [isChoosing, setIsChoosing] = useState(0);
	const Settings = [
		'/images/profile1.svg',
		'/images/profile2.svg',
		'/images/profile3.svg',
		'/images/profile4.svg',
		'/images/profile5.svg',
		'/images/profile6.svg',
		'/images/profile7.svg',
		'/images/profile8.svg',
		'/images/profile9.svg',
		'/images/profile10.svg',
	];

	

	//닉네임과 캐릭터 변경
	const donick = () => {
		axios({
			method: 'patch',
			url: 'https://junehan-test.shop/api/user',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
			data: {
				nickname: `${nick}`,
				cType: location.state.cType,
			},
		}).then((res) => {
			console.log(res);
			sessionStorage.setItem('nick', nick);
		});
	};
	//로그아웃
	const dologout = () => {
		axios({
			method: 'patch',
			url: 'https://junehan-test.shop/api/auth/logout',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
			data: {
				accessToken: `${SoTOKEN}`,
			},
		});

		sessionStorage.clear();
		navigate('/');
	};

	//회원탈퇴
	const dosignout = () => {
		axios({
			method: 'post',
			url: 'https://junehan-test.shop/api/auth/signout',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
			data: {
				accessToken: `${SoTOKEN}`,
			},
		});

		sessionStorage.clear();
		navigate('/');
	};

	// if (isChoosing) {
	// 	return (
	// 		<>
	// 			{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
	// 				<img
	// 					url={`/images/bigprofile${number}.svg`}
	// 					alt='프로필'
	// 					key={number}
	// 				/>
	// 			))}
	// 		</>
	// 	);
	// }
	const onChange = (e) => {
		console.log(e);
		setIsChoosing(e.target.id);
	};

	const choose = (idx) => {
		console.log(idx);
		setIsChoosing(idx);

		handleClose();
	};
	console.log(isChoosing);
	return (
		<>
			<ProfileHeader save>
				프로필 수정
				<Button mini _onClick={donick}>
					저장
				</Button>
			</ProfileHeader>
			<Grid signupFlex height='200px' alignItems='center'>
				<ProfileImage onClick={handleOpen} />
			</Grid>

			<Grid signupFlex>
				<Input
					width='80%'
					border='1px solid #B9B9B9'
					borerRadius='10px'
					_onChange={(e) => {
						inputnick(e.target.value);
					}}
					defaultValue={nickname}
				></Input>
			</Grid>
			<Grid flex direction='column' center></Grid>
			<Button
				color='#4d12ff'
				margin='26px auto 21px 18px'
				profile
				bordebottom='1px solid #EAEAEA '
				bold
				_onClick={dologout}
			>
				로그아웃
			</Button>
			<Button
				color='#121212'
				margin='0px auto 21px 18px'
				profile
				bordebottom='1px solid #EAEAEA '
				_onClick={dosignout}
			>
				회원탈퇴
			</Button>

			<Modal
				open={open}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Grid flex flexwrap>
						{Settings.map((profileimg, idx) => {
							return (
								<Badge
									checked={isChoosing === profileimg}
									key={idx}
									src={profileimg}
									onClick={() => {
										console.log(idx);
										choose(idx);
									}}
								>
									<label>
										<Radio
											type='radio'
											id={profileimg}
											name='isChoosing'
											checked={isChoosing === profileimg}
											onChange={onChange}
										/>
									</label>
								</Badge>
							);
						})}
					</Grid>
				</Box>
			</Modal>
		</>
	);
};
const style = {
	width: 340,
	// height: 600,
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	borderRadius: '10px',
	boxShadow: 24,
	p: 4,
};
export default MyProfile;

const ProfileImage = styled.div`
	background-image: url('/images/profileundefined.svg');
	width: 80px;
	height: 80px;
	background-size: cover;
`;

const Radio = styled.input`
	display: none;
`;

const Badge = styled.div`
	border-radius: 10px;
	border: 1px solid #b9b9b9;

	${({ checked }) => checked && 'background-color: #4d12ff; color: #fff;'}
	cursor: pointer;
	width: 120px;
	height: 120px;
	background-image: url('${(props) => props.src}');
	background-size: cover;
	color: #b9b9b9;
`;
