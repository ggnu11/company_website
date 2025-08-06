import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

console.log("API_URL:", API_URL); // 디버깅용

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// useApi 훅으로 export (기존 코드와 호환)
const useApi = () => {
  return api;
};

export default useApi;
export { api };
