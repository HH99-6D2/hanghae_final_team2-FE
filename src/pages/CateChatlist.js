import React, { useState, useEffect } from 'react';
import CateChat from '../components/categorychat/CateChat';
import ProfileHeader from '../components/common/ProfileHeader';
import { Grid } from '../elements';
import { ReactComponent as Filter } from '../assets/Filter.svg';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
//카테고리 클릭시 채팅리스트 보여줄 페이지

const CateChatlist = (props) => {
	const location = useLocation();
	const today = moment().format('YYYY-MM-DD');
	const endtime = moment().add(7, 'days').format('YYYY-MM-DD');
	const [chat, setChat] = useState('');

	useEffect(() => {
		axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/search?category=${location.state.category}&sort=1&startDate=${today}&endDate=${endtime}`,
		}).then((res) => {
			setChat(res.data);
		});
	}, []);

	return (
		<>
			<ProfileHeader search>
				<Grid position='absolute' top='40px' left='325px'>
					<Filter />
				</Grid>
			</ProfileHeader>
			{chat &&
				chat.map((list) => {
					return <CateChat key={list.id} list={list} />;
				})}
		</>
	);
};

export default CateChatlist;
