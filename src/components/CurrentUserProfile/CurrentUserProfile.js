import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserLikes, getCurrentUserPosts} from "../../actions/UserActions";
import CurrentUserProfileHeader from "./CurrentUserProfileHeader";
import CurrentUserProfileBody from "./CurrentUserProfileBody";
import { resetAuthError, resetPositiveAlert } from "../../actions/AuthActions";

function Profile() {
  const isLogged = useSelector(state=>state.auth.isLogged)
  const user = useSelector((state) => state.auth.user);
  const userposts = useSelector((state) => state.user.currentUserPosts);
  const userlikes = useSelector((state) => state.user.currentUserLikes);
  const dispatch = useDispatch();
  const token = useSelector(state=>state.auth.token);
  const positiveAlert = useSelector(state=>state.auth.positiveAlert)
  const error = useSelector(state=>state.auth.error)

  useEffect(() => {
    if(isLogged){
    dispatch(getCurrentUserPosts(user.id,token));
    dispatch(getCurrentUserLikes(user.id,token));
    }
  }, [user?.id,dispatch,isLogged,token]);


  

  useEffect(() => { 
   let timer
    if(positiveAlert!==""){      
    timer = setTimeout(()=>{
      dispatch(resetPositiveAlert());   
    },3000) 
  }
  return ()=>clearTimeout(timer);
}, [positiveAlert,dispatch])

  useEffect(() => { 
     let timer2;
    if(error!==""){     
    timer2 = setTimeout(()=>{
      dispatch(resetAuthError());   
    },3000)   
  }
  return ()=>clearTimeout(timer2);
}, [error,dispatch])
 
  return (
    <main className="c-user-profile">
      <div className="container">
      {positiveAlert!==""&&positiveAlert!==undefined?<div class="alert alert-success"   role="alert">
                         {positiveAlert}
                      </div>:""}
      {error!==""&&error!==undefined?<div class="alert alert-danger"   role="alert">
                         {error}
                      </div>:""}
        <div className="row">
          <div className="card">
            <CurrentUserProfileHeader user={user}/>
            <CurrentUserProfileBody userposts={userposts} userlikes={userlikes}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
