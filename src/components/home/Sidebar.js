import React from 'react';
import { Grid, Image, Text, Buttons } from '../../elements';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Settings = [
	{
		url: '/images/sidebar/addchat.svg',
		title: '채팅방 만들기',
		navi: '/addchat',
	},
	{
		url: '/images/sidebar/editchat.svg',
		title: '채팅방 관리',
		navi: '/chatlist',
	},
	{
		url: '/images/sidebar/blackList.svg',
		title: '차단 목록',
		navi: '/blocklist',
	},
	{
		url: '/images/sidebar/appalert.svg',
		title: '앱 알림 설정',
		navi: '/alarmsetting',
	},
];

const Supports = [
	{
		url: '',
		title: '채팅방 만들기',
	},
	{
		url: '/images/sidebar/askservice.svg',
		title: '이용 약관 및 문의',
	},
];
const ChooseImage = [
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
function Sidebar(props) {
	const navigate = useNavigate();
	const nickname = sessionStorage.getItem('nick');
	const token = sessionStorage.getItem('token');
	const cType = sessionStorage.getItem('cType');

	return (
		<>
			<Grid margin='25px 28px 0 20px' cursor='pointer'>
				<Image
					_onClick={() => {
						navigate('/');
					}}
					src={'/images/cancel.svg'}
					size='22'
				/>
			</Grid>
			<Grid profileFlex margin='17px 33px'>
				{isNaN(cType) ? (
					<ProfileImage src={'/images/profileundefined.svg'} />
				) : (
					<ProfileImage src={ChooseImage[cType]} />
				)}

				<Grid margin='0 0 0 11px'>
					<Text size='21px' padding='0 0 7px 0'>
						{nickname} 님
					</Text>
					<Text
						size='12px'
						onClick={() => {
							if (token) {
								navigate('/profile');
							} else {
								navigate('/login');
							}
						}}
					>
						프로필수정
					</Text>
				</Grid>
			</Grid>
			<Grid margin='46px 32px 27px 30px'>
				<Text size='16px' bold>
					Setting
				</Text>
				<Grid profileFlex direction='column' margin='16px 0'>
					{Settings.map((Setting) => {
						return (
							<Buttons
								Sidebar
								src={Setting.url}
								key={Setting.url}
								_onClick={() => {
									if (token) {
										navigate(`${Setting.navi}`);
									} else {
										navigate('/login');
									}
								}}
							>
								{Setting.title}
							</Buttons>
						);
					})}
				</Grid>
			</Grid>
			<Grid margin='27px 32px 53px 30px'>
				<Text size='16px' bold>
					Support
				</Text>
				<Grid profileFlex direction='column' margin='16px 0'>
					{Supports.map((Support) => {
						return (
							<Buttons Sidebar src={Support.url} key={Support.url}>
								{Support.title}
							</Buttons>
						);
					})}
				</Grid>
			</Grid>
		</>
	);
}

export default Sidebar;
const ProfileImage = styled.div`
	background-image: url('${(props) => props.src}');
	width: 58px;
	height: 58px;
	background-size: cover;
	border-radius: 70%;
`;
