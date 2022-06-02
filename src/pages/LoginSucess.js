import React, { useState } from 'react';
import ProfileHeader from '../components/common/ProfileHeader';
import { Image, Grid, Buttons, Input } from '../elements';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// 최초로그인시 보여줄 페이지(닉네임,이미지변경)

const LoginSucess = (props) => {
	const navigate = useNavigate();
	const nickname = sessionStorage.getItem('nick');
	const TOKEN = sessionStorage.getItem('token');
	const [nick, inputnick] = useState(nickname);
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const cType = sessionStorage.getItem('cType');
	const [isChoosing, setIsChoosing] = useState(cType);
	const Settings = [
		'/images/profile0.svg',
		'/images/profile1.svg',
		'/images/profile2.svg',
		'/images/profile3.svg',
		'/images/profile4.svg',
		'/images/profile5.svg',
		'/images/profile6.svg',
		'/images/profile7.svg',
		'/images/profile8.svg',
		'/images/profile9.svg',
	];
	//닉네임 변경
	const donick = () => {
		axios({
			method: 'patch',
			url: 'https://junehan-test.shop/api/user',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
			data: {
				nickname: `${nick}`,
				cType: `${isChoosing}`,
			},
		}).then((res) => {
			console.log(res);
			sessionStorage.setItem('nick', nick);
			sessionStorage.setItem('cType', isChoosing);

			navigate('/');
		});
	};

	const onChange = (e) => {
		console.log(e);
		setIsChoosing(e.target.id);
	};

	const choose = (idx) => {
		setIsChoosing(idx);
		handleClose();
	};
	return (
		<>
			<ProfileHeader>프로필 설정</ProfileHeader>
			<Grid signupFlex height='270px' alignItems='center'>
				{isNaN(cType) ? (
					<ProfileImage src={'/images/profileundefined.svg'} />
				) : (
					<ProfileImage onClick={handleOpen} src={Settings[isChoosing]} />
				)}
			</Grid>
			<Grid signupFlex margin='36px auto'>
				<Input
					width='310px'
					border='2px solid #4D12FF'
					_onChange={(e) => {
						inputnick(e.target.value);
					}}
					defaultValue={nickname}
				>
					닉네임
				</Input>
			</Grid>
			<Grid signupFlex>
				<Buttons _onClick={donick}>시작하기</Buttons>
			</Grid>
			<Modal
				open={open}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Grid signupFlex flexwrap>
						{Settings.map((profileimg, idx) => {
							return (
								<Badge
									checked={isChoosing === profileimg}
									key={idx}
									src={profileimg}
									onClick={() => {
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
export default LoginSucess;

const ProfileImage = styled.div`
	background-image: url('${(props) => props.src}');
	width: 120px;
	height: 120px;
	background-size: cover;
	border-radius: 70%;
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
