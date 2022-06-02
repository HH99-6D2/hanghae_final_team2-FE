import React, { useState } from 'react';
import ProfileHeader from '../components/common/ProfileHeader';
import { Grid, Text, Button } from '../elements';
import styled from 'styled-components';
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Dateset, CateChat, Notfound } from '../components';
const SerachChat = () => {
	const [search, setSearch] = useState('');
	const [result, setResult] = useState('');
	const [start, setstart] = useState('');
	const [end, setend] = useState('');
	const [open, setOpen] = useState(false);
	const [errormsg, setErrormsg] = useState('');
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [region, setRegion] = useState('전체');

	const Settings = [
		'전체',
		'서울',
		'인천',
		'강원',
		'경기',
		'충남',
		'충북',
		'경남',
		'전남',
		'전북',
		'제주도',
	];

	const sendword = () => {
		if (!search) {
			return;
		}
		axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/search?&sort=1&word=${search}`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		})
			.then((res) => {
				setResult(res.data);
				setErrormsg('');
			})
			.catch((err) => {
				setErrormsg(err);
				setResult('');
			});
	};

	const dofileter = () => {
		handleClose();
		axios({
			method: 'get',
			url: `https://yogoloper.shop/api/rooms/search?&sort=1&startDate=${start}&endDate=${end}&word=${search}`,
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem('token')}`,
			},
		})
			.then((res) => {
				setResult(res.data);
				setErrormsg('');
			})
			.catch((err) => {
				setErrormsg(err);
				setResult('');
			});
	};
	const style = {
		width: 315,
		height: 452,
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		bgcolor: 'background.paper',
		borderRadius: '10px',
		boxShadow: 24,
		p: 4,
	};

	const onChange = (e) => {
		setRegion(e.target.id);
	};

	return (
		<>
			<ProfileHeader search>
				검색
				<Grid position='absolute' top='40px' left='325px' _onClick={handleOpen}>
					<img src={'/images/searchfilter.svg'} />
				</Grid>
			</ProfileHeader>
			<Grid position='relative' flex>
				<Inputsearch onChange={(e) => setSearch(e.target.value)} />
				<Grid position='absolute' top='26px' left='309px' _onClick={sendword}>
					<img src={'/images/searchglass.svg'} />
				</Grid>
			</Grid>
			{start && end && (
				<Grid flex margin='2px auto' width='317px'>
					<Text bold>일정</Text>
					<Text margin='0px 13px 0px 4px'>
						{start.replaceAll('-', '.')}
						{'~'}
						{end.replaceAll('-', '.')}
					</Text>
					<Text bold>지역</Text>
					<Text>{region}</Text>
				</Grid>
			)}

			<Modal
				open={open}
				// onClose={handleClose}
				aria-labelledby='modal-modal-title'
				aria-describedby='modal-modal-description'
			>
				<Box sx={style}>
					<Grid textAlign='center'>
						<Text bold>필터</Text>
					</Grid>
					<Text create bold margin='4px 0px 10px -19px'>
						일정
					</Text>
					<Grid signupFlex>
						<Dateset setstart={setstart} setend={setend} width='120px' />
					</Grid>
					<Text create bold margin='10px 0px 10px -19px'>
						지역
					</Text>
					<Grid flex flexwrap>
						{Settings.map((Setting) => {
							return (
								<Badge checked={region === Setting} key={Setting}>
									<label>
										{Setting}
										<Radio
											type='radio'
											id={Setting}
											name='region'
											checked={region === Setting}
											onChange={onChange}
										/>
									</label>
								</Badge>
							);
						})}
					</Grid>
					<Button
						textAlign
						bg='#4D12FF'
						width='250px'
						margin='50px 0px 0px 0px'
						color='white'
						_onClick={dofileter}
					>
						검색
					</Button>
				</Box>
			</Modal>

			{result &&
				result.map((list) => {
					return <CateChat key={list} list={list} ischecked={list.isLike} />;
				})}
			{errormsg && <Notfound />}
		</>
	);
};

const Inputsearch = styled.input`
	width: 320px;
	margin: 20px auto;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	height: 45px;
`;

const Badge = styled.div`
	border-radius: 30px;
	border: 1px solid #b9b9b9;
	padding: 4px 9px;
	margin: 2px 5px;
	${({ checked }) => checked && 'background-color: #4d12ff; color: #fff;'}
	cursor: pointer;
	color: #b9b9b9;
	&:hover {
		background-color: #4d12ff;
	}
`;

const Radio = styled.input`
	display: none;
`;

export default SerachChat;
