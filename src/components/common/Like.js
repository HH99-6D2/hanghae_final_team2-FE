import React, { useEffect, useState } from 'react';
import { Checkbox } from '@mui/material';
import axios from 'axios';
import { ReactComponent as MainUnLike } from '../../assets/MainUnLike.svg';
import { ReactComponent as MainLike } from '../../assets/MainLike.svg';
import { ReactComponent as Purpleheart } from '../../assets/Purpleheart.svg';
const Like = (props) => {
	const TOKEN = sessionStorage.getItem('token');
	const { roomid, purple, ischecked } = props;
	const [like, setlike] = useState(null);
	const [islike, setIslike] = useState(ischecked);

	useEffect(() => {
		setlike(ischecked ? true : false);
	}, [like]);

	const dolike = () => {
		if (!TOKEN) {
			return;
		}

		setlike(!like);

		if (like) {
			axios({
				method: 'get',
				url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				console.log(res);
			});
		} else {
			axios({
				method: 'delete',
				url: `https://yogoloper.shop/api/rooms/likes/${roomid}`,
				headers: {
					Authorization: `Bearer ${TOKEN}`,
				},
			}).then((res) => {
				console.log(res);
			});
		}
	};
	if (purple) {
		return (
			<Checkbox
				defaultChecked={ischecked}
				onClick={dolike}
				icon={<Purpleheart />}
				checkedIcon={<MainLike />}
			></Checkbox>
		);
	}

	return (
		<Checkbox
			defaultChecked={ischecked}
			onClick={dolike}
			icon={<MainUnLike />}
			checkedIcon={<MainLike />}
		></Checkbox>
	);
};

export default Like;
