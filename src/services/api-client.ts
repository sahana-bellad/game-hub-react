import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
} 
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "a55266f876de4100aa06a3f06e2abd71",
  },
});
