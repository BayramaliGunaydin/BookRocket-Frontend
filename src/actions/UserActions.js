import axios from "axios";

export const getCurrentUserPosts = (userid) => (dispatch) => {
  axios
    .get("http://localhost:9009/userposts/" + userid)
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_USER_POST_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getCurrentUserLikes = (userid) => (dispatch) => {
  axios
    .get("http://localhost:9009/userlikes/" + userid)
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_USER_LIKE_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getUser = (userid) =>(dispatch)=>{
  axios
    .get("http://localhost:9009/user/" + userid)
    .then((res) => {
      dispatch({
        type: "GET_USER",
        payload: res.data,
      });
    })

}

export const getUserPosts = (userid) => (dispatch) => {
  axios
    .get("http://localhost:9009/userposts/" + userid)
    .then((res) => {
      dispatch({
        type: "GET_USER_POST_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getUserLikes = (userid) => (dispatch) => {
  axios
    .get("http://localhost:9009/userlikes/" + userid)
    .then((res) => {
      dispatch({
        type: "GET_USER_LIKE_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const searchUser = (username) => (dispatch) => {
  axios
    .get("http://localhost:9009/searchuser/" + username)
    .then((res) => {
      dispatch({
        type: "SEARCH_USER",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};