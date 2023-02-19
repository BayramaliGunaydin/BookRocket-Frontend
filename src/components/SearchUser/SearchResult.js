import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { acceptFriendRequests, cancelFriendRequest, sendFriendRequest } from '../../actions/AuthActions'
import axios from 'axios'

function SearchResult(props) {
  const isLogged = useSelector(state=>state.auth.isLogged)
  const sendedFriendRequests = useSelector(state=>state.auth.sendedFriendRequests)
  const userid = useSelector(state=>state.auth.user.id)
  const [isSended,setIsSended] = useState(false);
  const [isFriend,setIsFriend] = useState(false);
  const friendRequests = useSelector(state=>state.auth.friendRequests);
  const [isRequested,setIsRequested]=useState(false);
  const dispatch = useDispatch();
  const token = useSelector(state=>state.auth.token);
  const friendList = useSelector(state=>state.auth.friendList)
  const navigate = useNavigate();

  useEffect(()=>{
    const index= sendedFriendRequests?.findIndex(sendedRequest=>sendedRequest?.id===props.searchedUser?.id)
    if(index!==-1){
      setIsSended(true);
    }else{
      setIsSended(false)
    }
    const index2= friendList?.findIndex(friend=>friend?.id===props.searchedUser?.id)
    if(index2!==-1){
      setIsFriend(true);
    }else{
      setIsFriend(false)
    }
    const index3= friendRequests?.findIndex(request=>request?.id===props.searchedUser?.id)
    if(index3!==-1){
      setIsRequested(true);
    }else{
      setIsRequested(false)
    }
  },[sendedFriendRequests,friendList,friendRequests,props.searchedUser?.id])


  const onSendFriendRequest=()=>{
    dispatch(sendFriendRequest(props.searchedUser,token))
  }

  const onCancelFriendRequest=()=>{
    dispatch(cancelFriendRequest(props.searchedUser.id,token));
  }

  const onAcceptFriendRequest=()=>{
    dispatch(acceptFriendRequests(props.searchedUser,token));
  }

  const onSendMessage=()=>{
    axios
    .post("http://localhost:9009/createchat/"+props.searchedUser.id,{},{headers:{
     Authorization: 'Bearer ' + token
    }})
    .then(res=>{
      dispatch({type:"CREATE_CHAT", payload:res.data})
      navigate("/chat/"+res.data?.chatListid)
      }).catch(res => console.log(res))
  }
  return (
    <>
    {props.username===""?"":(props.searchedUser?.id === userid?"":<div className="card user-search-content">
        <div className='user-search-content-img'>
        <img src={`data:image/jpg;base64,`+props.searchedUser?.pic} alt="" />
        </div>
        <div className='user-search-content-detail' >
        <Link to={"/userprofile/"+props.searchedUser?.id}><h4>{props.searchedUser?.username}</h4> </Link>
        {isLogged?isSended?<button onClick={onCancelFriendRequest} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-x"></i> <span>Arkadaşlık İsteği Kaldır</span> </button>:isFriend?<button onClick={onSendMessage} className="btn btn-outline-light search-add-button"><i class="fa-solid fa-paper-plane"></i><span> Mesaj Gönder</span> </button>:isRequested?<button onClick={onAcceptFriendRequest} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-check"></i> <span>Arkadaşlık İsteğini Kabul Et</span> </button>:<button onClick={onSendFriendRequest} className="btn btn-outline-light search-add-button"><i className="fa-solid fa-envelope"></i><span> Arkadaşlık İsteği Gönder</span> </button>:""}
        
        
        </div>
    </div>)}
    
    </>
    
  )
}

export default SearchResult