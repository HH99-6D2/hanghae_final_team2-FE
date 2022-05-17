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
import moment from "moment";
import axios from "axios";
function App() {
  //토큰만료시간 1분이전에 로그인 연장
  const expiretime = localStorage.getItem("timeout");
  const refresh = localStorage.getItem("refresh");
  const nowtime = moment()._d;
  // if (moment(expiretime).diff(nowtime, "m") < 4) {
  //   axios({
  //     method: "post",
  //     url: "http://junehan-test.shop/api/auth/refresh",
  //     data: {
  //       refreshToken: `${refresh}`,
  //     },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }
  console.log(moment(expiretime).diff(nowtime, "m"));
  // console.log(nowtime);
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
        <Route path='/catechat/:category' element={<CateChatlist />} />
        <Route path='/auth' element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
