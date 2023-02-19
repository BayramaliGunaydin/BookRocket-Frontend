import React from 'react'
import CurrentUserLikes from "./CurrentUserLikes"
import CurrentUserPosts from "./CurrentUserPosts"

function CurrentUserProfileBody(props) {

    const addActivetoButton=async(e)=>{
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
                    <button onClick={addActivetoButton} className="btn-interaction" value="post"><i class="fa-solid fa-comment"></i> <span>Yorumlarınız</span> </button>
                    <button onClick={addActivetoButton} className="btn-interaction" value="like"><i class="fa-solid fa-heart"></i> <span>Beğendikleriniz</span> </button>
                    <button onClick={addActivetoButton} className="btn-interaction" value=""><i class="fa-solid fa-caret-up"></i></button>
                </div>           
                  <div className="col-12 mx-auto">
                    <ul class="list-group list-group-flush user-post-list interaction-list">
                      <li class="list-group-item"></li>
                      {props.userposts?.map((post,index) => {
                        return <CurrentUserPosts post={post} key={index} />;
                      })}
                    </ul>
                  </div><div className="col-12 mx-auto">
                    <ul className="list-group list-group-flush user-like-list interaction-list">
                      <li className="list-group-item"></li>
                      {props.userlikes?.map((like,index) => {
                        return <CurrentUserLikes like={like} key={index} />;
                      })}
                    </ul>
                  </div>              
              </div>
            </div>
  )
}

export default CurrentUserProfileBody