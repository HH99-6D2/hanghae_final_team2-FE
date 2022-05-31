import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Like = (props) => {
	const { roomid, ischecked } = props;
	useEffect(() => {
		console.log(ischecked);
	}, [ischecked]);

	const [like, setlike] = useState(ischecked);
	const dolike = (e) => {
		// e.stopPropagation();
		console.log(ischecked);
		if (!like) {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('token')}`,
				},
			}).then((res) => {
				console.log(res);
			});
		} else {
			axios({
				method: 'delete',
				url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem('token')}`,
				},
			}).then((res) => {
				console.log(res);
			});
		}
		setlike((prev) => !prev);
	};

	return (
		<>
			<label>
				<Input type='checkbox' onChange={dolike} checked={like} />
				{like ? <LikeIcon /> : <UnlikeIcon />}
			</label>
		</>
	);
};

export default Like;

const Input = styled.input`
	display: none;
`;

const LikeIcon = styled.div`
	width: 30px;
	height: 30px;
	background-image: url('/images/MainLike.svg');
`;

const UnlikeIcon = styled.div`
	width: 30px;
	height: 30px;
	background-image: url('/images/Purpleheart.svg');
`;
