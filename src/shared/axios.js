import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "http://junehan-test.shop",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    "Access-Control-Allow-Origin": "*",
    token: "",
  },
});

export default instance;
