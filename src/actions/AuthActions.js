import axios from "axios";

export const login = (username, password) => (dispatch) => {
  axios
    .post("http://localhost:9009/login", { username, password })
    .then((res) => {
      dispatch({ type: "LOGIN", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const register = (username, password) => (dispatch) => {
  console.log("asd");
  axios
    .post("http://localhost:9009/register", { username, password })
    .then((res) => {
      dispatch({ type: "REGISTER", payload: res.data });
    })
    .catch((err) => console.log(err));
};

export const logout = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
};
