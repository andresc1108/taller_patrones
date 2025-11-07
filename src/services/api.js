import axios from "axios";

const api = axios.create({
  baseURL: "https://taller-patrones-h3l7.vercel.app", // backend desplegado
  timeout: 5000,
});

export default api;