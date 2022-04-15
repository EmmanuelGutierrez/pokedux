import axios from "axios";
import { ENV } from "./config";

const URL = ENV.pokemon.api;
export const axiosInstance = axios.create({ baseURL: URL });
