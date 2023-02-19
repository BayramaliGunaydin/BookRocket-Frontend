import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addBookLike, deleteBookLike, getBook, getBookLikes, getBookPost, resetBookError } from "../../actions/BookActions";
import BookPost from "./BookPost";
import SendPost from "./SendPost";
import LikeModal from "./LikeModal";
import UnauthorizedModal from "./UnauthorizedModal";
import moment from "moment";
import "moment/locale/tr"

function BookDetail() {
  const book = useSelector((state) => state.book.book);
  const posts = useSelector((state) => state.book.bookPosts);
  const booklikes = useSelector(state=>state.book.bookLikes)
  const user = useSelector(state=>state.auth.user);
  const isLogged = useSelector(state=>state.auth.isLogged)
  const token = useSelector(state=>state.auth.token);
  const [isLiked,setIsLiked] = useState(false); 
  const dispatch = useDispatch();
  const params = useParams();
  const [open,setOpen] = useState(false);
  const [authorizeModalOpen,setAuthorizeModalOpen]=useState(false);
  const error = useSelector(state=>state.book.error);
  
  moment.locale("tr")
  useEffect(() => {
    dispatch(resetBookError());
    dispatch(getBook(params.id,token));
    dispatch(getBookPost(params.id,token));
    dispatch(getBookLikes(params.id,token));

  }, [params.id,dispatch,token]);
  useEffect(() => {
   
    const likebutton = document.querySelector(".like-buttons .like")
    
    const likelist = booklikes.filter(like=>like.user.id === user.id);
    if(likelist.length<1){
      setIsLiked(false);
      likebutton.classList.remove("liked")
    }
    else{
      setIsLiked(true);
      likebutton.classList.add("liked")
    }
  }, [booklikes,user.id,isLiked,error]);


  useEffect(()=>{
    const bookdetail = document.querySelector('.book-detail');
    const observerBookDetail = new IntersectionObserver(entries => {
   
     bookdetail.classList.toggle("animation-book-detail",entries[0].isIntersecting)
  
  });
  observerBookDetail.observe( bookdetail );
    },[])

 

 

  const likeHandle=(e)=>{

    const likebutton = document.querySelector(".like-buttons .like")
    if(isLogged){
    if(isLiked){
      likebutton.classList.remove("liked")
      dispatch(deleteBookLike(user,book?.id,token));
      setIsLiked(false);
    }else{
      likebutton.classList.add("liked")
      dispatch(addBookLike(user,book?.id,token))
      setIsLiked(true);
    }}
    else{
      setAuthorizeModalOpen(true);
    }
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
          {error!==""&&error!==undefined?<div class="alert alert-danger" role="alert">
  {error}
</div>:""}
          <div className="card book-detail-card">
            <div className="card-body book-detail-card-body">
              <div className="book-detail-card-body-img">
                {book?.pic!==undefined?<img src={`data:image/jpg;base64,` + book?.pic} alt="" />:""}
                
              </div>
              <div className="book-detail-card-body-content">
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
                  <p>Eklenme Tarihi: {moment(book?.createdate).format("LL")}</p>
                  <p>Editör: {book?.editor?.username}</p>
                </div>
              </div>
            </div>
            <div className="card-footer book-detail-card-footer">
              <div className="book-detail-card-footer-buttons">
                <span className="like-buttons">
                  <button onClick={likeHandle} className="btn like">
                  <i className="fa-regular fa-heart"></i>
                </button>
                <LikeModal open={open} modalToggle={modalToggle} booklikes={booklikes}/>
              </span>
                
                
                <button onClick={showPosts} className="btn btn-outline-dark">
                  <i className="fa-regular fa-comment"></i>
                </button>
              </div>
              <SendPost book={book} error={error}/>
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
