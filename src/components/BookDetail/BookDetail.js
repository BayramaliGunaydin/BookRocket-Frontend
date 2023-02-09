import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBookLike, deleteBookLike, getBook, getBookLike, getBookLikes, getBookPost } from "../../actions/BookActions";
import BookPost from "./BookPost";
import SendPost from "./SendPost";
import { Modal,Button,Icon } from "semantic-ui-react";
import LikeModal from "./LikeModal";
import UnauthorizedModal from "./UnauthorizedModal";

function BookDetail() {
  const book = useSelector((state) => state.book.book);
  const posts = useSelector((state) => state.book.bookPosts);
  const booklikes = useSelector(state=>state.book.bookLikes)
  const user = useSelector(state=>state.auth.user);
  const isLogged = useSelector(state=>state.auth.isLogged)
  const [isLiked,setIsLiked] = useState(false); 
  const dispatch = useDispatch();
  const params = useParams();
  const [open,setOpen] = useState(false);
  const [authorizeModalOpen,setAuthorizeModalOpen]=useState(false);
  
  useEffect(() => {
    dispatch(getBook(params.id));
    dispatch(getBookPost(params.id));
    dispatch(getBookLikes(params.id));
    const likebutton = document.querySelector(".like-buttons .like")
    const likelist = booklikes.filter(like=>like.user.id == user.id);
 
   
  }, []);
  useEffect(() => {
   
    const likebutton = document.querySelector(".like-buttons .like")
    
    const likelist = booklikes.filter(like=>like.user.id == user.id);
    if(likelist.length<1){
      setIsLiked(false);
      likebutton.classList.remove("liked")
    }
    else{
      setIsLiked(true);
      likebutton.classList.add("liked")
    }
    console.log(isLiked)
  }, [booklikes]);

 

 

  const likeHandle=(e)=>{
    console.log(booklikes);
    const likebutton = document.querySelector(".like-buttons .like")
    if(isLogged){
    if(isLiked){
      likebutton.classList.remove("liked")
      dispatch(deleteBookLike(user,book.id));
      setIsLiked(false);
    }else{
      likebutton.classList.add("liked")
      dispatch(addBookLike(user,book.id))
      setIsLiked(true);
    }}
    else{
      setAuthorizeModalOpen(true);
    }
    console.log(isLiked)
  }

  const showPosts = () => {
    if(isLogged){
      const cardFooter = document.querySelector(".book-detail-card-footer");
    cardFooter.classList.toggle("show");
    }else{
      setAuthorizeModalOpen(true);
    }
    
  };


  const modalToggle=(toggle)=>{
    if(isLogged){
    setOpen(toggle);}
    else{
      setAuthorizeModalOpen(true);
    }
  }

  return (
    <main className="book-detail">
      <div className="container">
        <div className="row">
          <div className="card book-detail-card">
            <div className="card-body book-detail-card-body">
              <div className="col-3">
                <img src={`data:image/jpg;base64,` + book?.pic} alt="" />
              </div>
              <div className="col-9">
                <div className="book-about">
                  <h3 className="text-dark">{book?.bookname}</h3>
                  <h5 className="text-dark">Yazar: {book?.author}</h5>
                  <h6 className="text-dark">Tür: {book?.topic}</h6>
                  <h3 className="text-dark">Hikaye:</h3>
                  <p className="lead">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Culpa quibusdam magnam, sint fugit totam eligendi officiis
                    ea quidem velit earum aut mollitia accusamus, excepturi
                    sapiente!
                  </p>
                </div>
              </div>
            </div>
            <div className="card-footer book-detail-card-footer">
              <div className="book-detail-card-footer-buttons">
                <span className="like-buttons">
                  <button onClick={likeHandle} className="btn like">
                  <i class="fa-regular fa-heart"></i>
                </button>
                <LikeModal open={open} modalToggle={modalToggle} booklikes={booklikes}/>
              </span>
                
                
                <button onClick={showPosts} className="btn btn-outline-dark">
                  <i class="fa-regular fa-comment"></i>
                </button>
              </div>
              <SendPost book={book}/>
              <div className="card-footer book-detail-card-footer-posts mt-5 ">
                {posts?.slice(0).reverse().map((post,index) => {
                  return <BookPost post={post} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <UnauthorizedModal authorizeModalOpen={authorizeModalOpen} setAuthorizeModalOpen={setAuthorizeModalOpen}/>     
    </main>
  );
}

export default BookDetail;
