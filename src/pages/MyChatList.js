import React, { useState, useEffect } from 'react';
import MyChat from '../components/mychat/MyChat';
import ProfileHeader from '../components/common/ProfileHeader';

// 햄버거바->채팅방관리 클릭시 보여줄 페이지

const MyChatList = (props) => {
	return (
		<>
			<ProfileHeader>채팅방 관리</ProfileHeader>
			<MyChat />
		</>
	);
};

export default MyChatList;
