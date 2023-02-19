import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentUserLikes, getCurrentUserPosts, getUser} from "../../actions/UserActions";
import UserProfileHeader from "./UserProfileHeader";
import UserProfileBody from "./UserProfileBody";
import { useNavigate, useParams } from "react-router-dom";
import { getUserFriendRequests, resetAuthError, resetPositiveAlert } from "../../actions/AuthActions";

function Profile() {
  const user = useSelector((state) => state.user.user);
  const userposts = useSelector((state) => state.user.currentUserPosts);
  const userlikes = useSelector((state) => state.user.currentUserLikes);
  const dispatch = useDispatch();
  const params = useParams();
  const token = useSelector(state=>state.auth.token);
  const positiveAlert = useSelector(state=>state.auth.positiveAlert)
  const error = useSelector(state=>state.auth.error);
  const cuser = useSelector(state=>state.auth.user);
  const isLogged = useSelector(state=>state.auth.isLogged)
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUser(params.id,token))
    if(isLogged){
      if(cuser.id===params.id){
        navigate("/profile")
      }
      if(user!==undefined){
        dispatch(getCurrentUserPosts(params.id,token));
        dispatch(getCurrentUserLikes(params.id,token));
        dispatch(getUserFriendRequests(token));
      }
    }
  }, [dispatch,params.id,token,cuser,navigate,isLogged]);

 
 
  useEffect(() => { 
     let timer
    if(positiveAlert!==""){      
    timer = setTimeout(()=>{
      dispatch(resetPositiveAlert());   
    },3000)
    return ()=>clearTimeout(timer);
  }}, [positiveAlert,dispatch])

  useEffect(() => { 
     let timer2
    if(error!==""){
      
    timer2 = setTimeout(()=>{
      dispatch(resetAuthError());     
    },3000)
    return ()=>clearTimeout(timer2); 
  }}, [error,dispatch])

  return (
    <main className="user-profile">
      <div className="container">
        {positiveAlert!==""&&positiveAlert!==undefined?<div class="alert alert-success" role="alert">
  {positiveAlert}
</div>:""}
{error!==""&&error!==undefined?<div class="alert alert-danger" role="alert">
  {error}
</div>:""}
        <div className="row">
          <div className="card">
            <UserProfileHeader user={user}/>
            <UserProfileBody userposts={userposts} userlikes={userlikes}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
