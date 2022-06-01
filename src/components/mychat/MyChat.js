import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/material/Tabs';
import axios from 'axios';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Text, Image } from '../../elements';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Like from '../common/Like';
// 햄버거바->채팅방관리-> 보여줄 탭

const MyChat = (props) => {
	const TOKEN = sessionStorage.getItem('token');
	const [madechatlist, setMadechatlist] = useState('');
	const [joinchatlist, setjoinchatlist] = useState('');
	const [likechat, setLikechat] = useState('');
	const navigate = useNavigate();

	const theme = createTheme({
		components: {
			MuiTab: {
				styleOverrides: {
					textColorPrimary: {
						color: '#B9B9B9',
						'&.Mui-selected': {
							color: '#4d12ff',
							fontWeight: '800',
						},
					},
					indicator: {
						height: 2,
						backgroundColor: '#4d12ff',
					},
				},
			},
		},
	});

	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role='tabpanel'
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...other}
			>
				{value === index && (
					<Box sx={{ p: 3, padding: 0 }}>
						<Typography>{children}</Typography>
					</Box>
				)}
			</div>
		);
	}

	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.number.isRequired,
		value: PropTypes.number.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		};
	}
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
		if (value === 0) {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/management?option=1`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				setMadechatlist(res.data);
			});
		} else if (value === 1) {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/management?option=2`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				setjoinchatlist(res.data);
			});
		} else {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/management?option=3`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				setLikechat(res.data);
			});
		}
	};

	return (
		<>
			<ThemeProvider theme={theme}>
				<Box sx={{ width: '100%' }}>
					<Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
						<TabList
							value={value}
							onChange={handleChange}
							aria-label='basic tabs example'
							variant='fullWidth'
							TabIndicatorProps={{ sx: { height: '' } }}
						>
							<Tab label='만든 채팅방' {...a11yProps(0)} />
							<Tab label='참여 채팅방' {...a11yProps(1)} />
							<Tab label='관심 채팅방' {...a11yProps(2)} />
						</TabList>
					</Box>

					<TabPanel value={value} index={0}>
						{madechatlist &&
							madechatlist.map((list) => {
								return (
									<Grid flex direction='row' key={list.imageUrl}>
										<Image
											setting
											src={list.imageUrl}
											_onClick={(e) => {
												navigate('/chatInform', {
													state: { roomid: list?.id },
												});
											}}
										></Image>
										<Grid
											between
											width='317px'
											height='117px'
											margin='7px auto'
										>
											<Grid flex>
												<Grid margin='12px 5px 39px 0px'>
													<Text bold paddingbottom='6px'>
														{list.title}
													</Text>
													<Text color='#767676'>
														{list.regionAName}
														{list.regionBName}
													</Text>
													<Grid flex>
														<Text color='#767676'>{list.startDate}</Text>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								);
							})}
					</TabPanel>
					<TabPanel value={value} index={1}>
						{joinchatlist &&
							joinchatlist.map((list) => {
								return (
									<Grid flex direction='row' key={list.imageUrl}>
										<Image
											setting
											src={list.imageUrl}
											_onClick={(e) => {
												navigate('/chatInform', {
													state: { roomid: list?.id },
												});
											}}
										></Image>
										<Grid
											between
											width='317px'
											height='117px'
											margin='7px auto'
										>
											<Grid flex>
												<Grid margin='12px 5px 39px 0px'>
													<Text bold paddingbottom='6px'>
														{list.title}
													</Text>
													<Text color='#767676'>
														{list.regionAName}
														{list.regionBName}
													</Text>
													<Grid flex>
														<Text color='#767676'>{list.startDate}</Text>
													</Grid>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								);
							})}
					</TabPanel>
					<TabPanel value={value} index={2}>
						{likechat &&
							likechat.map((list) => {
								return (
									<Grid flex direction='row' key={list.imageUrl}>
										<Image
											setting
											src={list.imageUrl}
											_onClick={(e) => {
												navigate('/chatInform', {
													state: { roomid: list?.id },
												});
											}}
										></Image>
										<Grid
											between
											width='317px'
											height='117px'
											margin='7px auto'
										>
											<Grid flex>
												<Grid margin='12px 5px 39px 0px'>
													<Text bold paddingbottom='6px'>
														{list.title}
													</Text>
													<Text color='#767676'>
														{list.regionAName}
														{list.regionBName}
													</Text>
													<Grid flex>
														<Text color='#767676'>{list.startDate}</Text>
													</Grid>
												</Grid>
											</Grid>
											<Grid margin='0px 35px 0px 0px'>
												<Like roomid={list.id} />
											</Grid>
										</Grid>
									</Grid>
								);
							})}
					</TabPanel>
				</Box>
			</ThemeProvider>
		</>
	);
};

export default MyChat;
const CountNum = styled.div`
	width: 20px;
	height: 20px;
	background-image: url('${(props) => props.src}');
`;
const TagText = styled.div`
	background: #eaeaea;
	height: 23px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
`;
