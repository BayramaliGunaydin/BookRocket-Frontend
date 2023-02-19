import axios from "axios";


export const login = (username, password) => (dispatch) => {
  axios
    .post("http://localhost:9009/login", { username, password })
    .then((res) => {
      dispatch({ type: "LOGIN", payload: res.data });
    })
    .catch((error)=>{
      dispatch({
        type: "LOGIN_ERROR",
        payload: error.response.data,
      })}
    );
};

export const notification = () => (dispatch) => {
 
      dispatch({ type: "NOTIFICATION_COUNT"});
    
};

export const register = (username, password) => (dispatch) => {
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


export const getUserFriendRequests = (token) =>(dispatch)=>{
  axios
  .get("http://localhost:9009/getuserfriendrequests",{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"GET_USER_FRIEND_REQUESTS" , payload:res.data})
  })
}

export const acceptFriendRequests = (senduser,token) =>(dispatch)=>{
  axios
  .post("http://localhost:9009/acceptfriendrequest/"+senduser.id,{},
  {
    headers:{
      Authorization: 'Bearer ' + token
    }
  }
  )
  .then(res=>{

    dispatch({type:"GET_USER_FRIEND_REQUESTS_ACCEPT" , payload:senduser})
  })
}

export const rejectFriendRequests = (senduser,token) =>(dispatch)=>{
  axios
  .post("http://localhost:9009/rejectfriendrequest/"+senduser.id,{},{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"GET_USER_FRIEND_REQUESTS_REJECT" , payload:senduser})
  })
}

export const deleteFriendShip = (userid,token) =>(dispatch)=>{
  axios
  .post("http://localhost:9009/deletefriendship/"+userid,{},{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"DELETE_FRIENDSHIP" , payload:userid})
  })
}

export const getSendedFriendRequests = (token) =>(dispatch)=>{
  axios
  .get("http://localhost:9009/getsendedfriendrequests",{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"GET_SENDED_FRIEND_REQUESTS" , payload:res.data})
  })
}

export const sendFriendRequest = (getuser,token) =>(dispatch)=>{
  axios
  .post("http://localhost:9009/sendfriendrequest/"+getuser.id,{},{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"SEND_FRIEND_REQUEST",payload:getuser})
  })
}


export const cancelFriendRequest = (getuserid,token) =>(dispatch)=>{
  axios
  .post("http://localhost:9009/cancelfriendrequest/"+getuserid,{},{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"CANCEL_FRIEND_REQUEST" , payload:getuserid})
  })
}

export const addBook= (newbook,token) => (dispatch) => {
  
  axios
    .post("http://localhost:9009/addbook" ,newbook,{headers:{
      Authorization: 'Bearer ' + token
    }})
    .then((res) => {
      dispatch({
        type: "ADD_BOOK",
        payload: newbook,
      });
    })
    .catch((err) => console.log(err));
};

export const setEditor= (token) => (dispatch) => {
  axios
    .put("http://localhost:9009/seteditor",{},{headers:{
      Authorization: 'Bearer ' + token
    }} )
    .then((res) => {
      dispatch({
        type: "SET_EDITOR",
      });
    })
    .catch((err) => console.log(err));
};

export const getUserChats= (token) => (dispatch) => {
  axios
    .get("http://localhost:9009/getuserchats",{headers:{
      Authorization: 'Bearer ' + token
    }} )
    .then((res) => {
      dispatch({
        type: "GET_USER_CHATS",
        payload:res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getChatMessages= (chatid,token) => (dispatch) => {
  axios
    .get("http://localhost:9009/getchatdetails/"+chatid,{headers:{
      Authorization: 'Bearer ' + token
    }} )
    .then((res) => {
      dispatch({
        type: "GET_CHAT_MESSAGES",
        payload:res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const setChatingUser= (user,chat) => (dispatch) => {
  
      dispatch({
        type: "SET_CHATING_USER",
        payload:{user,chat}
      });
}

export const clearMessages= () => (dispatch) => {
  
  dispatch({
    type: "CLEAR_MESSAGES",
  });
}

export const sendMessage = (chatid,message,token,user) => (dispatch) => {
  axios
  .post("http://localhost:9009/sendmessage/"+chatid,{message},{headers:{
    Authorization: 'Bearer ' + token
  }} )
  .then((res) => {
    dispatch({
    type: "SEND_MESSAGE",
    payload:{cid:chatid,message,user},
  });
  })
  .catch((err) =>{
    console.log(err)
    dispatch({
      type: "SEND_MESSAGE_ERROR",
      payload:err.response.data,
    });
  }); 
}


export const getCurrentUserFriends=(userid,token)=>(dispatch)=>{
  axios
  .get("http://localhost:9009/getuserfriends/"+userid,{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"GET_CUSER_FRIENDS" ,payload:res.data})})
}

export const createChat = (userid,token)=>(dispatch)=>{
  axios
  .post("http://localhost:9009/createchat/"+userid,{},{headers:{
    Authorization: 'Bearer ' + token
  }})
  .then(res=>{
    dispatch({type:"CREATE_CHAT" ,payload:res.data})})
    .catch(err=>{
      dispatch({type:"CREATE_CHAT_ERROR" ,payload:err.response.data})})
}

export const resetAuthError =()=>(dispatch)=>{
  dispatch({type:"RESET_AUTH_ERROR"})
}

export const resetPositiveAlert =()=>(dispatch)=>{
  dispatch({type:"RESET_POSITIVE_ALERT"})
}