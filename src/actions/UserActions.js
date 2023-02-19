import axios from "axios";

export const getCurrentUserPosts = (userid,token) => (dispatch) => {
  axios
    .get("http://localhost:9009/userposts/" + userid,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_USER_POST_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getCurrentUserLikes = (userid,token) => (dispatch) => {
  axios
    .get("http://localhost:9009/userlikes/" + userid,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "GET_CURRENT_USER_LIKE_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getUser = (userid,token) =>(dispatch)=>{
  axios
    .get("http://localhost:9009/user/" + userid,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "GET_USER",
        payload: res.data,
      });
    })

}

export const getUserPosts = (userid,token) => (dispatch) => {
  axios
    .get("http://localhost:9009/userposts/" + userid,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "GET_USER_POST_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getUserLikes = (userid,token) => (dispatch) => {
  axios
    .get("http://localhost:9009/userlikes/" + userid,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "GET_USER_LIKE_LIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getUserFriends=(userid,token)=>(dispatch)=>{
  axios
  .get("http://localhost:9009/getuserfriends/"+userid,{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"GET_USER_FRIENDS" ,payload:res.data})})
}

export const searchUser = (username,token) => (dispatch) => {
  axios
    .get("http://localhost:9009/searchuser/" + username,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "SEARCH_USER",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const setUserImage= (image,token) => (dispatch) => {
  axios
    .put("http://localhost:9009/saveimage",{base64:image},{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "SET_USER_IMAGE",
        payload: image,
      });
    })
    .catch((err) => {
      dispatch({
        type:"SET_USER_IMAGE_ERROR",
        payload:err.response.data
      })
    });
};

