import axios from "axios";

export const instance = axios.create({
  baseURL: "https://react-project-490d2.firebaseio.com/"
});
