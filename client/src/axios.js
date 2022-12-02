import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:4200/api/",
  withCredentials: true,
});
