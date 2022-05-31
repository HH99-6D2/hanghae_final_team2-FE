import React from 'react';
import { Text, Grid } from '../../elements';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back } from '../../assets/Back.svg';
import Like from './Like';
//메인을 제외한 나머지 페이지들의 헤더

const ProfileHeader = (props) => {
	const navigate = useNavigate();
	const { children, save, back, search, column, chatinform, roomid } = props;
	if (save) {
		return (
			<Grid flex alignItems='center' margin='39px 10px 20px 34px'>
				<Back size='30' onClick={() => navigate('/')} cursor='pointer' />
				<Grid width='160px' margin='0 auto'>
					<Text bold size='20px'>
						{children}
					</Text>
				</Grid>
			</Grid>
		);
	} else if (back) {
		return (
			<Grid flex alignItems='center' margin='39px 10px 20px 34px'>
				<Back size='30' onClick={() => navigate(-1)} cursor='pointer' />
				<Grid width='160px' margin='0px auto'>
					<Text bold size='20px'>
						{children}
					</Text>
				</Grid>
			</Grid>
		);
	} else if (search) {
		return (
			<Grid flex alignItems='center' margin='39px 10px 20px 34px'>
				<Back size='30' onClick={() => navigate('/')} cursor='pointer' />
				<Grid width='160px' margin='0 0 0 63px' textAlign='center'>
					<Text bold size='20px'>
						{children}
					</Text>
				</Grid>
			</Grid>
		);
	} else if (column) {
		return (
			<Grid flex alignItems='center' margin='39px 10px 20px 34px'>
				<Back size='30' onClick={() => navigate('/')} cursor='pointer' />
				<Grid width='160px' margin='0 0 0 63px' textAlign='center'>
					<Text bold size='20px'>
						{children}
					</Text>
				</Grid>
			</Grid>
		);
	} else if (chatinform) {
		return (
			<Grid
				flex
				alignItems='center'
				margin='10px auto'
				position='relative'
				width='330px'
				bottomborder
				paddingbottom='20px'
			>
				<Back size='30' onClick={() => navigate(-1)} cursor='pointer' />
				<Grid
					width='115px'
					margin='auto'
					textAlign='center'
					position='absolute'
					left='108px'
				>
					<Text size='14px'>{children}</Text>
				</Grid>
				<Grid position='absolute' left='290px' flex>
					<Like purple roomid={roomid} />
				</Grid>
			</Grid>
		);
	}
	return (
		<Grid flex alignItems='center' margin='39px 10px 20px 34px'>
			<Back
				cursor='pointer'
				size='30'
				onClick={() => {
					navigate('/');
				}}
			/>
			<Grid width='160px' margin='0 0 0 53px' textAlign='center'>
				<Text bold size='20px'>
					{children}
				</Text>
			</Grid>
		</Grid>
	);
};

export default ProfileHeader;
