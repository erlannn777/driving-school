import axios from "axios";

const api = "https://95.165.26.169:457/";

export const publicApi = axios.create({
  baseURL: api,
});

const API = axios.create({
  baseURL: api,
});

API.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

API.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        alert("Пожалуйста, войдите в систему");
        localStorage.removeItem("token");
      } catch (e) {
        return Promise.reject(e);
      }
    } else {
      return Promise.reject(err);
    }
  }
);

export default API;
