import "./App.css";
import React from "react";
import LoginSucess from "../pages/LoginSucess";
import Login from "../pages/Login";
import Home from "../pages/Home";
import MyProfile from "../pages/MyProfile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginsucess" element={<LoginSucess />} />
        <Route path="/myprofile/:id" element={<MyProfile />} />
      </Routes>s
    </BrowserRouter>
  );
}

export default App;
