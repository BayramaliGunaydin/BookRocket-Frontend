import axios from "axios";

export const getBookList = () => (dispatch) => {
  axios
    .get("http://localhost:9009/getallbooks")
    .then((res) => {
      dispatch({
        type: "GET_BOOKLIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err))
   /* dispatch({
      type: "GET_BOOKLIST_ERROR",
      payload: err.response.data,
    });*/
};

export const searchBookName = (bookname) => (dispatch) => {
  axios
    .post("http://localhost:9009/booknamesearch", { bookname })
    .then((res) => {
      dispatch({ type: "BOOKS_SEARCH", payload: res.data });
    })
    .catch((error)=>{
      dispatch({
        type: "BOOKS_SEARCH_ERROR",
        payload: error.response.data.message,
      })}
    );
};

export const searchAuthorName = (author) => (dispatch) => {
  axios
    .post("http://localhost:9009/bookauthorsearch", { author })
    .then((res) => {
      dispatch({ type: "BOOKS_SEARCH", payload: res.data });
    })
    .catch((error)=>{
      dispatch({
        type: "BOOKS_SEARCH_ERROR",
        payload: error.response.data.message,
      })}
    );
};
export const searchTopicName = (topic) => (dispatch) => {
  axios
    .post("http://localhost:9009/booktopicsearch", { topic })
    .then((res) => {
      dispatch({ type: "BOOKS_SEARCH", payload: res.data });
    })
    .catch((error)=>{
      dispatch({
        type: "BOOKS_SEARCH_ERROR",
        payload: error.response.data.message,
      })}
    );
};

export const getBook = (bookid) => (dispatch) => {
  axios.get("http://localhost:9009/getbook/" + bookid)
  .then((res) => {
    dispatch({ type: "GET_BOOK", payload: res.data });
  })
  .catch((error)=>{
    console.log(error.response.data.message)
    dispatch({
      type: "BOOK_GET_ERROR",
      payload: error.response.data.message,
    })}
  );
};

export const getBookPost = (bookid,token) => (dispatch) => {
  axios.get("http://localhost:9009/bookposts/" + bookid,{headers:{
    Authorization: 'Bearer ' + token
  }}).then((res) => {
    dispatch({ type: "GET_BOOK_POSTS", payload: res.data });
  }).catch((error)=>{
    dispatch({
      type: "GET_BOOK_POSTS_ERROR",
      payload: error.response.data.message,
    })}
  );
};

export const getSendPost = (bookid, text,user,token) => (dispatch) => {
  axios.post("http://localhost:9009/bookpost/" + bookid,{text},{headers:{
    Authorization: 'Bearer ' + token
  }} ).then((res) => {
    dispatch({ type: "SEND_BOOK_POST", payload: {book:{id:bookid},customuser:user,post:text}});
  }).catch((error)=>{
    dispatch({
      type: "SEND_BOOK_POST_ERROR",
      payload: error.response.data.message,
    })}
  );
};

export const getBookLikes = (bookid,token) => (dispatch) => {
  axios.get("http://localhost:9009/booklikes/" + bookid,{headers:{
    Authorization: 'Bearer ' + token
  }}).then((res) => {
    dispatch({ type: "GET_BOOK_LIKES", payload: res.data});
  }).catch((error)=>{
    dispatch({
      type: "GET_BOOK_LIKES_ERROR",
      payload: error.response.data.message,
    })}
  );
};

export const addBookLike = (user,bookid,token) =>(dispatch)=>{
  axios.post("http://localhost:9009/addlike/"+bookid, {userid:user.id,bookid},{headers:{
    Authorization: 'Bearer ' + token
  }}).then((res) => {
    dispatch({ type: "ADD_BOOK_LIKE", payload: {user,bookid}});
  }).catch((error)=>{
    console.log(error.response.data.message)
    dispatch({
      type: "ADD_BOOK_LIKE_ERROR",
      payload: error.response.data.message,
    })}
  );
}

export const deleteBookLike = (user,bookid,token) =>(dispatch)=>{
  
  axios.delete("http://localhost:9009/deletelike/"+bookid,{headers:{
    Authorization: 'Bearer ' + token
  }}).then(
    dispatch({ type: "DELETE_BOOK_LIKE", payload: {user,bookid}})
  ).catch((error)=>{
    console.log(error.response.data.message)
    dispatch({
      type: "DELETE_BOOK_LIKE_ERROR",
      payload: error.response.data.message
    })}
  );
}

export const getMostLikedBooks = () =>(dispatch)=>{
  
  axios.get("http://localhost:9009/mostlikedbooks").then((res)=>
    dispatch({ type: "GET_MOST_LIKED_BOOKS", payload: res.data})
  ).catch((error)=>{
    dispatch({
      type: "GET_MOST_LIKED_BOOKS_ERROR",
      payload: error.response.data.message
    })}
  );
}
export const getMostPostedBooks = () =>(dispatch)=>{
  
  axios.get("http://localhost:9009/mostpostedbooks").then((res)=>
    dispatch({ type: "GET_MOST_POSTED_BOOKS", payload: res.data})
  ).catch((error)=>{
    dispatch({
      type: "GET_MOST_POSTED_BOOKS_ERROR",
      payload: error.response.data.message
    })}
  );
}

export const resetBookError = () =>(dispatch)=>{
    dispatch({
      type: "RESET_BOOK_ERROR",
    })
  
}

export const addBookError = (message)=>(dispatch)=>{
  dispatch({type:"ADD_BOOK_ERROR",payload:message})
}