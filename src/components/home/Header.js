import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Image, Text } from '../../elements';
import styled from 'styled-components';

const Header = () => {
	const navigate = useNavigate();
	const token = sessionStorage.getItem('token');
	return (
		<>
			<Background>
				<Grid between alignItems='center' height='72px'>
					<Image
						src={'/images/homesidebar.svg'}
						size='28'
						margin='0 22px'
						_onClick={() => {
							navigate('/Sidebar');
						}}
					/>
					<img src={'/images/homelogo.svg'} />
					<Grid between margin='0 22px 0 0'>
						<Image
							src={'/images/searchglass.svg'}
							size='28'
							_onClick={() => {
								navigate('/Search');
							}}
						/>
						<Image
							src={'/images/homealarm.svg'}
							size='28'
							_onClick={() => {
								if (token) {
									navigate('/newalarm');
								} else {
									navigate('/login');
								}
							}}
						/>
					</Grid>
				</Grid>
			</Background>
		</>
	);
};
const Background = styled.div`
	background: #7879f1;
	max-width: 420px;
	width: 100%;
	position: fixed;
	z-index: 3;
`;

export default Header;
