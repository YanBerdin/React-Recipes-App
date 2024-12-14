//* File manager for api requests and token
import axios from "axios";

const api = axios.create({
  // baseURL: import.meta.env.API_BASE_URL,
  baseURL: process.env.API_BASE_URL,
});
// ${process.env.API_BASE_URL}
api.interceptors.request.use((request) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;