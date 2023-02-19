import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { clearMessages, resetAuthError, setChatingUser } from '../../actions/AuthActions';

function ChatList(props) {


    const userid = useSelector(state=>state.auth.user.id);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const setChattedUser=(e)=>{
      e.preventDefault();
      const chattinguser = props.chat?.user2?.id===userid?props.chat?.user1:props.chat?.user2;
      dispatch(setChatingUser(chattinguser,props.chat))
      dispatch(clearMessages());
      dispatch(resetAuthError());
      navigate("/chat/"+props.chat.chatListid)
    }

  return (
    <Link to={"/chat/"+props.chat?.id} onClick={setChattedUser}>
      {props.chat?.user2?.id===userid?<li class="list-group-item chat-list-item">
            <img src={`data:image/jpg;base64,`+props.chat?.user1?.pic} alt="" />
            <p className='lead'><b>{props.chat?.user1?.username}</b></p>
        </li>:<li class="list-group-item chat-list-item">
            <img src={`data:image/jpg;base64,`+props.chat?.user2?.pic} alt="" />
            <p className='lead'><b>{props.chat?.user2?.username}</b></p>
        </li>}
        
    </Link>
  )
}

export default ChatList