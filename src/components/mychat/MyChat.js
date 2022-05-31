import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/material/Tabs';
import axios from 'axios';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CateChat from '../categorychat/CateChat';

// 햄버거바->채팅방관리-> 보여줄 탭

const MyChat = (props) => {
	const TOKEN = sessionStorage.getItem('token');
	const [mychatlist, setMychatlist] = useState('');
	const theme = createTheme({
		components: {
			MuiTab: {
				styleOverrides: {
					textColorPrimary: {
						color: 'gray',
						'&.Mui-selected': {
							color: '#000000',
							fontWeight: '800',
						},
					},
					indicator: {
						height: 2,
						backgroundColor: 'black',
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
				setMychatlist(res.data);
				console.log(res.data);
			});
		} else if (value === 1) {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/management?option=2`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				setMychatlist(res.data);
				console.log(res.data);
			});
		} else {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/management?option=3`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				setMychatlist(res.data);
				console.log(res.data);
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
						<CateChat made mychat={mychatlist} />
					</TabPanel>
					<TabPanel value={value} index={1}>
						채팅방이 없습니다.
					</TabPanel>
					<TabPanel value={value} index={2}>
						<CateChat made mychat={mychatlist} />
					</TabPanel>
				</Box>
			</ThemeProvider>
		</>
	);
};

export default MyChat;
