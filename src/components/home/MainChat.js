import * as React from 'react';
import { Grid, Button, Text } from '../../elements';
import Like from '../common/Like';
import styled from 'styled-components';
import axios from 'axios';
// 메인화면에 보여줄 추천하는 채팅방 컴포넌트
const MainChat = (props) => {
	const { src, id, title, startday, ischecked } = props;
	const TOKEN = sessionStorage.getItem('token');
	const joinchat = () => {
		axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/join/${id}`,
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
		}).then((res) => {
			console.log(res);
		});
	};
	return (
		<MainImg mainchat position='relative' src={src}>
			<Grid flex width='180px' height='180px' margin='34px 0 0 30px'>
				<Text bbold size='25px' color='white' margin='30px 0px 0px 0px'>
					{title} <br />
					{startday?.replaceAll('-', '.')}
				</Text>
			</Grid>
			<Grid position='absolute' left='256px' top='20px'>
				<Like roomid={id} ischecked={ischecked} />
			</Grid>

			<StartBtn onClick={joinchat}>채팅방 들어가기</StartBtn>
		</MainImg>
	);
};

const MainImg = styled.div`
	width: 320px;
	height: 380px;
	margin: 18px auto;
	border-radius: 10px;
	border: none;
	background-position-x: center;
	background-position-y: center;
	background-image: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 58.46%),
		url('${(props) => props.src}');
	position: relative;
`;

const StartBtn = styled.div`
	width: 160px;
	height: 40px;
	border-radius: 10px;
	color: #4d12ff;
	background-color: white;
	justify-content: center;
	align-items: center;
	display: flex;
	cursor: pointer;
	font-weight: 600;
	position: absolute;
	bottom: 35px;
	left: 30px;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
`;
export default MainChat;
