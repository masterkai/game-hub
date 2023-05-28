import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1ff8a9634d0b474cb77c884e33f727c9",
  },
});
