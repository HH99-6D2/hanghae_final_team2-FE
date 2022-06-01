import React, { useState } from 'react';
import { Grid, Text, Image } from '../../elements';
import Like from '../common/Like';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
//카테고리 선택시 보여줄 채팅방 컴포넌트

const CateChat = (props) => {
	const { list, mychat, ischecked } = props;
	const navigate = useNavigate();
	const day = list?.startDate.split(' ');

	return (
		<Grid flex direction='column'>
			<Image
				CateChat
				src={list?.imageUrl}
				_onClick={(e) => {
					navigate('/chatInform', { state: { roomid: list?.id } });
				}}
			>
				<Grid
					position='absolute'
					left='256px'
					top='7px'
					_onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<Like roomid={list?.id} ischecked={ischecked} />
				</Grid>
				<Grid position='absolute' top='12px' left='249px'>
					<Text color='white'>{list?.likeCnt}</Text>
				</Grid>
			</Image>
			<Grid between width='317px' height='117px' margin='7px auto'>
				<Grid flex>
					<Grid margin='0px 5px 39px 0px' width='215px'>
						<Text bold paddingbottom='6px' size='18px'>
							{list?.title}
						</Text>
						<Grid flex margin='10px 0px' width='300px'>
							{list?.tags.map((tag) => {
								return (
									<TagText key={tag}>
										{'#'}
										{tag}
									</TagText>
								);
							})}
						</Grid>
						<Text>{list?.spot}</Text>
						<Grid flex>
							<Text>{day[0]?.replaceAll('-', '.')}</Text>
							<Text margin='0px 10px'>{day[1]}</Text>
						</Grid>
					</Grid>
				</Grid>
				<Grid flex>
					<Text>{list?.joinCnt}</Text>
					<CountNum src={'/images/joinnum.svg'} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default CateChat;

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
