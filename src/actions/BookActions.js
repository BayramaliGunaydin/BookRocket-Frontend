import axios from "axios";

export const getBookList = () => (dispatch) => {
  axios
    .get("http://localhost:9009/")
    .then((res) => {
      dispatch({
        type: "GET_BOOKLIST",
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const searchBookName = (bookname) => (dispatch) => {
  axios
    .post("http://localhost:9009/booknamesearch", { bookname })
    .then((res) => {
      dispatch({ type: "BOOKS_SEARCH", payload: res.data });
    })
    .catch(
      dispatch({
        type: "BOOKS_SEARCH_ERROR",
        payload: "Aradığınız kriterde kitap bulunamadı.",
      })
    );
};

export const searchAuthorName = (author) => (dispatch) => {
  axios
    .post("http://localhost:9009/bookauthorsearch", { author })
    .then((res) => {
      dispatch({ type: "BOOKS_SEARCH", payload: res.data });
    })
    .catch(
      dispatch({
        type: "BOOKS_SEARCH_ERROR",
        payload: "Aradığınız kriterde kitap bulunamadı.",
      })
    );
};
export const searchTopicName = (topic) => (dispatch) => {
  axios
    .post("http://localhost:9009/booktopicsearch", { topic })
    .then((res) => {
      dispatch({ type: "BOOKS_SEARCH", payload: res.data });
    })
    .catch(
      dispatch({
        type: "BOOKS_SEARCH_ERROR",
        payload: "Aradığınız kriterde kitap bulunamadı.",
      })
    );
};

export const getBook = (bookid) => (dispatch) => {
  axios.get("http://localhost:9009/" + bookid).then((res) => {
    dispatch({ type: "GET_BOOK", payload: res.data });
  });
};

export const getBookPost = (bookid) => (dispatch) => {
  axios.get("http://localhost:9009/posts/" + bookid).then((res) => {
    dispatch({ type: "GET_BOOK_POSTS", payload: res.data });
  });
};

export const getSendPost = (bookid, post,user) => (dispatch) => {
  console.log(bookid,post)
  axios.post("http://localhost:9009/post/" + bookid,  post ).then((res) => {
    dispatch({ type: "SEND_BOOK_POST", payload: {book:{id:bookid},customuser:user,post:post.text}});
  });
};

export const getBookLikes = (bookid) => (dispatch) => {
  axios.get("http://localhost:9009/booklikes/" + bookid).then((res) => {
    dispatch({ type: "GET_BOOK_LIKES", payload: res.data});
  });
};

export const addBookLike = (user,bookid) =>(dispatch)=>{
  axios.post("http://localhost:9009/addlike", {userid:user.id,bookid}).then((res) => {
    dispatch({ type: "ADD_BOOK_LIKE", payload: {user,bookid}});
  });
}

export const deleteBookLike = (user,bookid) =>(dispatch)=>{
  console.log(user.id,bookid)
  axios.delete("http://localhost:9009/deletelike/"+user.id+"/"+bookid).then(
    dispatch({ type: "DELETE_BOOK_LIKE", payload: {user,bookid}})
  );
}