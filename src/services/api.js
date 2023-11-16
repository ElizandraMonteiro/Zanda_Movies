import axios from "axios";

export const api = axios.create({
  baseURL: "https://zandamovies-api.onrender.com173",
});