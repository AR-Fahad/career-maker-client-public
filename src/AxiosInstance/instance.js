import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://career-maker-server-steel.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
