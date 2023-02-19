import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserChats } from '../../actions/AuthActions';
import { useNavigate } from 'react-router-dom';
import ChatList from './ChatList';

function Chats() {

  const token = useSelector(state=>state.auth.token)
  const chats = useSelector(state=>state.auth.userChats);
  const dispatch = useDispatch();
  const isLogged=useSelector(state=>state.auth.isLogged)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getUserChats(token));
  },[dispatch,token])

  useEffect(()=>{
    if(!isLogged && isLogged!==undefined){
      navigate("/login-register")
    }
  },[isLogged,navigate])


  return (
    <div className='chats'>
        <div className="container">
          <div className="row">
          <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
          <div className="card">
            <div className="card-header"><h2 className='text-center'>Mesajlar</h2></div>
            <div className="card-body">
            <ul class="list-group list-group-flush chat-list">
              {chats?.map((chat,index)=>{return <ChatList chat={chat} key={index}/>})} 
            </ul>
                   </div> 
          </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Chats