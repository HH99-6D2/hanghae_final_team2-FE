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
} from "../pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginsucess" element={<LoginSucess />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/mychatlist" element={<MyChatList />} />
        <Route path="/alarmsetting" element={<AlarmSetting />} />
        <Route path="/newalarm" element={<NewAlarm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
