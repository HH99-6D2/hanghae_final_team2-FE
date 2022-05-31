import React, { useState, useEffect } from 'react';
import { Text, Grid, Image, Button } from '../elements';
import ProfileHeader from '../components/common/ProfileHeader';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
const ChatInform = () => {
	const location = useLocation();
	const [chatinform, setChatinform] = useState('');
	const TOKEN = sessionStorage.getItem('token');
	const now = moment();
	const startcheck = now.isBetween(
		chatinform.startDate,
		chatinform.endDate,
		undefined,
		'[]'
	);

	//채팅방 상세정보 확인할때
	useEffect(() => {
		axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/${location.state.roomid}`,
		}).then((res) => {
			setChatinform(res.data);
			console.log(res.data);
		});
	}, []);

	//채팅방 들어가기 버튼누를때
	const joinchat = () => {
		axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/join/${location.state.roomid}`,
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
		}).then((res) => {
			console.log(res);
		});
	};
	return (
		<>
			<Chatimage src={chatinform.imageUrl} />

			<Chatinform>
				<ProfileHeader chatinform roomid={chatinform.id}>
					{chatinform.spot}
				</ProfileHeader>
				<Grid flex margin='0px 49px'>
					<Text create bold>
						채팅 이름
					</Text>
					<Text color='#767676'>{chatinform.title}</Text>
				</Grid>
				<Grid flex margin='20px 49px'>
					<Text create bold>
						참여인원
					</Text>
					<Text color='#767676'>
						{chatinform.joinCnt}
						{'명'}
					</Text>
				</Grid>
				<Grid flex margin='0px 49px'>
					<Text create bold>
						주제
					</Text>
					<Text color='#767676'>{chatinform.category}</Text>
				</Grid>
				<Grid flex margin='20px 49px'>
					<Text create bold>
						태그 정보
					</Text>
					<TagText>
						{' '}
						{'#'}
						{chatinform.tags?.join('#')}
					</TagText>
				</Grid>
				<Grid flex margin='0px 49px'>
					<Text create bold>
						위치
					</Text>
					<Text color='#767676'>
						{chatinform.regionAName}
						{chatinform.regionBName}
					</Text>
				</Grid>
				<Grid flex margin='20px 49px'>
					<Text create bold>
						일정
					</Text>
					<Grid>
						<Text color='#767676'>
							{chatinform.startDate?.replaceAll('-', '.')}
						</Text>
						<Text color='#767676'>
							{chatinform.endDate?.replaceAll('-', '.')}
						</Text>
					</Grid>
				</Grid>

				{startcheck && <StartBtn onClick={joinchat}>채팅방 들어가기</StartBtn>}
			</Chatinform>
		</>
	);
};

export default ChatInform;

const Chatimage = styled.div`
	width: 100%;
	height: 250px;
	background-image: url('${(props) => props.src}');
	background-position: center;
`;

const Chatinform = styled.div`
	/* box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25); */
	border-radius: 15px 15px 0px 0px;
	background: white;
	margin-top: -15px;
`;
const StartBtn = styled.div`
	width: 314px;
	height: 45px;
	border-radius: 10px;
	color: white;
	background: #4d12ff;
	justify-content: center;
	align-items: center;
	display: flex;
	margin: auto;
	cursor: pointer;
`;
const TagText = styled.div`
	background: #eaeaea;
	height: 23px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	font-size: 14px;
`;
