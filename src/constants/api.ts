import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: "http://83.229.87.142",
});
export default api;
