import "./App.css";
import React from "react";
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
} from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
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
        <Route path='/catechat' element={<CateChatlist />} />
        <Route
          path='http://junehan-test.shop/social/oauth'
          element={<Auth />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
