import React from 'react'
import UserPosts from './UserPosts';
import UserLikes from '../CurrentUserProfile/CurrentUserLikes';
import { useSelector } from 'react-redux';

function UserProfileBody(props) {
  const isLogged = useSelector(state=>state.auth.isLogged)
    const addActivetoButton=(e)=>{
        document.querySelectorAll(".btn-interaction").forEach(e=>e.classList.remove("active"));
        document.querySelectorAll(`.interaction-list`).forEach(e=>e.classList.remove("show"));  
        if(e.target.value!==""){
          document.querySelector(`.user-${e.target.value}-list`).classList.add("show")
         e.target.classList.add("active")       
        }      
      }

  return (
    <div className="card-body">
              <div className="row">
                <div className="profile-interaction-buttons">
                    <button onClick={addActivetoButton} className="btn-interaction" value="post"><i className="fa-solid fa-comment"></i> <span>Kullanıcı Yorumları</span> </button>
                    <button onClick={addActivetoButton} className="btn-interaction" value="like"><i className="fa-solid fa-heart"></i> <span>Kullanıcı Beğenileri</span> </button>
                    <button onClick={addActivetoButton} className="btn-interaction" value=""><i className="fa-solid fa-caret-up"></i></button>
                </div>           
                  <div className="col-12 mx-auto">
                    <ul className="list-group list-group-flush user-post-list interaction-list">
                      {isLogged?(props.userposts?.map((post,index) => {
                        return <UserPosts post={post} key={index} />;
                      })):<div className="alert alert-danger" role="alert">
                      Kullanıcının Yorumlarını Görmek İçin Giriş Yapınız
                    </div>}
                      
                    </ul>
                  </div><div className="col-12 mx-auto">
                    <ul className="list-group list-group-flush user-like-list interaction-list">
                      {isLogged?(props.userlikes?.map((like,index) => {
                        return <UserLikes like={like} key={index} />;
                      })):<div className="alert alert-danger" role="alert">
                      Kullanıcının Beğendiklerini Görmek İçin Giriş Yapınız
                    </div>}
                      
                    </ul>
                  </div>              
              </div>
            </div>
  )
}

export default UserProfileBody