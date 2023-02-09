import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSendPost } from "../../actions/BookActions";

function SendPost(props) {
  const [post, setPost] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);


  const onPostChange = (e) => {
    console.log(e.target.value)
    setPost(e.target.value);
  };

  useEffect(()=>{
     const postText =document.querySelector(".post-text")
     if(post===""){
     postText.value = "";}
  },[post])

  const sendPost = (e) => {
    e.preventDefault();
    let userid =user.id;
    let text = post; 
    e.target.value = "";   
    console.log(e.target.value)   
    dispatch(getSendPost(props.book.id,{userid,text},user));
    setPost("");
  };

  return (
    <div className="card-footer book-detail-card-footer-post mt-5 mx-auto">
      <form onChange={(e)=>onPostChange(e)} onSubmit={sendPost}>
        <textarea
        placeholder="Yorum Yazın..."
          cols="100"
          rows="3"
          className="form-control post-text"
          
        ></textarea>
        <button className="btn btn-primary mt-2 w-100" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default SendPost;
