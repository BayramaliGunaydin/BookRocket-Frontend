import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { getChatMessages, resetAuthError, sendMessage } from '../../actions/AuthActions';
import Messages from './Messages';


function Chat() {
    const params = useParams();
    const dispatch = useDispatch();
    const messages = useSelector(state=>state.auth.chatMessages);
    const user = useSelector(state=>state.auth.user)
    const [counter, setCounter] = useState(false);
    const [message, setMessage] = useState();
    const token = useSelector(state=>state.auth.token);
    const currentChat = useSelector(state=>state.auth.currentChat);
    const error = useSelector(state=>state.auth.error)
    const isLogged=useSelector(state=>state.auth.isLogged)
    const navigate = useNavigate()



    useEffect(()=>{
        if(!isLogged && isLogged!==undefined){
          navigate("/login-register")
        }
      },[isLogged,navigate])

      
    useEffect(()=>{
        if(isLogged && isLogged!==undefined){
        dispatch(getChatMessages(params.id,token)); 
        }      
    },[error,dispatch,params.id,token,isLogged])

  useEffect(() => {     
    if(error!==""){      
    let timer2 = setTimeout(()=>{
      dispatch(resetAuthError());   
    },3000)
    return ()=>clearTimeout(timer2);
  }}, [error,dispatch])
  

    useEffect(()=>{
        let timer = setTimeout(() =>  {
            dispatch(getChatMessages(params.id,token));
            setCounter(counter === false?true:false)
        }, 10000);
        return () => clearTimeout(timer);
    },[counter,dispatch,params.id,token])



    const onMessageChange = (e)=>{
        setMessage(e.target.value);
    }

    const onSendMessage = (e)=>{
        e.preventDefault();
        dispatch(sendMessage(params.id,message,token,user))
        setMessage("")
        e.target.elements[0].value="";
    }
  

  return (
    <div className='chat'>
        
        <div className="container">{error!==""?<div class="alert alert-danger text-center" role="alert">{error}</div>:""}
            <div className="card">
                <div className="card-header">
                    <h2 className='text-center'>{currentChat?.user1?.id===user?.id?currentChat?.user2?.username:currentChat?.user1?.username}</h2>
                </div>
                <div className="card-body">
                    <ul className='chat-messages'>
                        {messages?.map((message,index)=><Messages message={message} key={index} />)}
                    </ul>
                </div>
                <div className="card-footer p-3">
                    <form className='input-group'onSubmit={onSendMessage}>
                        <input name="message" cols="30" rows="2" className='form-control' placeholder='Mesaj' onChange={onMessageChange}></input>
                        <button className='btn btn-primary' type='submit' >Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
   
  )
}

export default Chat