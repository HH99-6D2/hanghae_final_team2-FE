import React from 'react';
import {
	LoginSucess,
	Login,
	Home,
	MyProfile,
	MyChatList,
	AlarmSetting,
	NewAlarm,
	CreateChat,
	Auth,
	CateChatlist,
	Sidebar,
	CreateChatFinal,
	SearchChat,
	Blocklist,
	ChatInform,
	ChatEdit,
	Guide,
	ProfileImage,
} from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '../elements';
import GlobalStyle from '../styles/globalStyle';
import Chat from '../pages/Chat';

function App() {
	return (
		<Container>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/loginsucess' element={<LoginSucess />} />
					<Route path='/profile' element={<MyProfile />} />
					<Route path='/chatlist' element={<MyChatList />} />
					<Route path='/alarmsetting' element={<AlarmSetting />} />
					<Route path='/newalarm' element={<NewAlarm />} />
					<Route path='/addchat' element={<CreateChat />} />
					<Route path='/catechat/:category' element={<CateChatlist />} />
					<Route path='/auth' element={<Auth />} />
					<Route path='/sidebar' element={<Sidebar />} />
					<Route path='/addchatcheck' element={<CreateChatFinal />} />
					<Route path='/search' element={<SearchChat />} />
					<Route path='/blocklist' element={<Blocklist />} />
					<Route path='/chatInform' element={<ChatInform />} />
					<Route path='/editchat' element={<ChatEdit />} />
					<Route path='/guide' element={<Guide />} />
					<Route path='/profileimage' element={<ProfileImage />} />
					<Route path='/chat/:chatid' element={<Chat />} />
				</Routes>
			</BrowserRouter>
		</Container>
	);
}

export default App;
