import React, { useEffect, useState } from 'react';
import CategorySlick from '../components/home/CategorySlick';
import MainChat from '../components/home/MainChat';
import { Grid, Text } from '../elements';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/home/Header';
import styled from 'styled-components';

const Home = (props) => {
	const [bestchat, setBestchat] = useState();
	const navigate = useNavigate();
	const TOKEN = sessionStorage.getItem('token');

	useEffect(() => {
		axios({
			method: 'get',
			url: 'https://yogoloper.shop/api/rooms',
			headers: {
				Authorization: `Bearer ${TOKEN}`,
			},
		}).then((res) => {
			setBestchat(res.data);
		});
	}, []);

	return (
		<>
			<Header />
			<MainBackground>
				<MainPicture src='images/mainpaint.svg' />
			</MainBackground>
			<Grid signupFlex margin='26px auto 19px auto' textAlign='center'>
				<Text bold size='18px'>
					이야기하고 싶은 주제를 골라
					<br />
					익명 채팅으로
					<br />
					정보와 대화를 나눠 보세요!
					<br />
				</Text>
			</Grid>
			<Grid signupFlex>
				<CreateBtn
					onClick={() => {
						if (TOKEN) {
							navigate('/addchat');
						} else {
							navigate('/login');
						}
					}}
				>
					채팅방 만들기
				</CreateBtn>
			</Grid>
			<Grid width='180px' margin='33px 27px'>
				<Text bbold size='21px'>
					어떤 주제로 <br />
					이야기 해볼까요?
				</Text>
			</Grid>
			<Grid flex justifyContent='space-evenly'>
				<CategorySlick />
			</Grid>
			<Grid width='160px' margin='10px 27px'>
				<Text bbold size='21px'>
					EV CHAT이 <br />
					추천하는 채팅
				</Text>
			</Grid>
			{bestchat &&
				bestchat.map((list) => {
					return (
						<MainChat
							key={list.id}
							src={list.imageUrl}
							id={list.id}
							title={list.title}
							startday={list.startDate.split(' ')[0]}
							ischecked={list.isLike}
						/>
					);
				})}
		</>
	);
};

const MainBackground = styled.div`
	background: #7879f1;
	width: 100%;
	height: 260px;
	display: flex;
	justify-content: center;
	padding-top: 70px;
	border-bottom: 1px solid black;
`;

const CreateBtn = styled.div`
	width: 150px;
	height: 40px;
	background: #eb4c3f;
	border-radius: 20px;
	box-sizing: border-box;
	color: white;
	text-align: center;
	padding: 10px 0px;
	font-weight: 600;
	cursor: pointer;
`;

const MainPicture = styled.div`
	width: 328px;
	height: 255px;
	background-image: url('${(props) => props.src}');
`;

export default Home;
