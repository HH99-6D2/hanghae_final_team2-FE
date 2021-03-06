import React from 'react';
import { Text } from '../elements';
import ProfileHeader from '../components/common/ProfileHeader';
import Blockperson from '../components/blocklist/Blockperson';
const Blocklist = () => {
	return (
		<>
			<ProfileHeader>차단 목록</ProfileHeader>
			<Text color='#B9B9B9' margin='20px 30px'>
				대화 중 불쾌한 경험이 있으신가요? <br />
				채팅 중 상대방을 차단 시키면
				<br />그 이용자의 대화가 자동으로 필터링이 됩니다.
			</Text>
			<Blockperson />
			<Blockperson />
		</>
	);
};

export default Blocklist;
