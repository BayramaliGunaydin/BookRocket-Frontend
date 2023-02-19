import React, { useEffect, useState } from 'react'
import UserFriendsModal from './UserFriendsModal';
import { acceptFriendRequests, cancelFriendRequest,deleteFriendShip, getCurrentUserFriends, sendFriendRequest } from '../../actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserProfileHeader(props) {
  const isLogged = useSelector(state=>state.auth.isLogged)
  const [friendOpen,setFriendOpen] = useState(false);
  const sendedFriendRequests = useSelector(state=>state.auth.sendedFriendRequests)
  const friendRequests = useSelector(state=>state.auth.friendRequests);
  const currentUserid = useSelector(state=>state.auth.user.id);
  const [isSended,setIsSended] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state=>state.auth.token);
  const friendList = useSelector(state=>state.auth.friendList);
  const [isFriend,setIsFriend] = useState(false);
  const [isRequested,setIsRequested]=useState(false);
  /*const [currentChat,setCurrentChat]=useState(useSelector(state=>state.auth.currentChat))
  const [chat,setChat]=useState(false);*/
  const navigate = useNavigate();
  

  const onFriendModalToggle = (toggle)=>{
    setFriendOpen(toggle)
  }  

  const onSendFriendRequest=()=>{
    dispatch(sendFriendRequest(props.user,token))
  }
  
  const onCancelFriendRequest=()=>{
    dispatch(cancelFriendRequest(props.user.id,token));
  }

  const onSendMessage=()=>{
    axios
    .post("http://localhost:9009/createchat/"+props.user.id,{},{headers:{
     Authorization: 'Bearer ' + token
    }})
    .then(res=>{
      navigate("/chat/"+res.data?.chatListid)
      }).catch(res => console.log(res))
      
    
  
  }  

  const onDeleteFriendShip = ()=>{
    dispatch(deleteFriendShip(props.user.id,token))
  }

  const onAcceptFriendRequest=()=>{
    dispatch(acceptFriendRequests(props.user,token));
  }


  


  useEffect(()=>{
    if(isLogged&& currentUserid!==undefined){
      dispatch(getCurrentUserFriends(currentUserid,token))
    }   
  },[dispatch,currentUserid,token,isLogged])

  useEffect(()=>{
    const friend = friendList?.findIndex((friend)=>friend?.id===props.user?.id);
    friend !==-1?setIsFriend(true):setIsFriend(false);
  },[dispatch,friendList,props.user?.id,token,currentUserid])


useEffect(()=>{
  if(isLogged){
    const index= sendedFriendRequests?.findIndex            (sendedRequest=>sendedRequest?.id===props.user?.id)
    if(index!==-1){
      setIsSended(true);
    }else{
      setIsSended(false)
    }
    const index2= friendRequests?.findIndex(request=>request?.id===props.user?.id)
    if(index2!==-1){
      setIsRequested(true);
    }else{
      setIsRequested(false)
    }
  }
},[sendedFriendRequests,isLogged,props.user?.id,friendRequests])



  return (
    <div className="card-header">
      <UserFriendsModal open={friendOpen} userid={props.user?.id} modalToggle={onFriendModalToggle}/>
      <div className="profile-img">             
        <span className="c-user-img-span">
          {props.user?.pic!==undefined?<img src={`data:image/jpg;base64,` + props.user?.pic} alt="" />:""}
          </span>              
      </div>
      <div className="profile-name">
        <h2>{props.user?.username}</h2>
      </div>
      {isLogged?
      <div className="profile-socials">
        {isFriend?<button onClick={onSendMessage} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-paper-plane"></i><span> Mesaj Gönder</span> </button>:""}
        <button className="btn btn-outline-light" onClick={()=>onFriendModalToggle(true)}><i className="fa-solid fa-user-group"></i> <span>Arkadaş Listesi</span></button>
        {isFriend?<button onClick={onDeleteFriendShip} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-x"></i> <span>Arkadaşlıktan çıkart</span> </button>:isSended?<button onClick={onCancelFriendRequest} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-x"></i> <span>Arkadaşlık İsteği Kaldır</span> </button>:isRequested?<button onClick={onAcceptFriendRequest} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-check"></i> <span>Arkadaşlık İsteğini Kabul Et</span> </button>:<button onClick={onSendFriendRequest} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-envelope"></i><span> Arkadaşlık İsteği Gönder</span> </button>}
      </div>:"" }
                 
     </div>
  )
}

export default UserProfileHeader