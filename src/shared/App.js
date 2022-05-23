import './App.css';
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
  SerachChat,
  Blocklist,
  ChatInform,
  ChatEdit,
} from '../pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components';

function App() {
  // const is_login = `${accessToken}`;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/loginsucess' exact element={<LoginSucess />} />
        <>
          <Route path='/profile' exact element={<MyProfile />} />
          <Route path='/chatlist' exact element={<MyChatList />} />
          <Route path='/alarmsetting' exact element={<AlarmSetting />} />
          <Route path='/newalarm' exact element={<NewAlarm />} />
          <Route path='/addchat' exact element={<CreateChat />} />
          <Route path='/catechat/:category' exact element={<CateChatlist />} />
          <Route path='/auth' exact element={<Auth />} />
          <Route path='/sidebar' exact element={<Sidebar />} />
          <Route path='/addchatcheck' exact element={<CreateChatFinal />} />
          <Route path='/search' exact element={<SerachChat />} />
          <Route path='/blocklist' exact element={<Blocklist />} />
          <Route path='/chatInform' exact element={<ChatInform />} />
          <Route path='/editchat' exact element={<ChatEdit />} />
        </>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
