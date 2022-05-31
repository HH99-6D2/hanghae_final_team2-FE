import * as React from 'react';
import { Grid, Button, Text } from '../../elements';
import Like from '../common/Like';
import styled from 'styled-components';
import axios from 'axios';
// 메인화면에 보여줄 추천하는 채팅방 컴포넌트
const MainChat = (props) => {
	const { src, id, title, startday } = props;
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
				<Text bbold size='25px' color='white'>
					{title} <br />
					{startday?.replaceAll('-', '.')}
				</Text>
			</Grid>
			<Grid position='absolute' left='256px' top='20px'>
				<Like roomid={id} />
			</Grid>

			<Button mainlike _onClick={joinchat}>
				채팅방 들어가기
			</Button>
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
export default MainChat;
