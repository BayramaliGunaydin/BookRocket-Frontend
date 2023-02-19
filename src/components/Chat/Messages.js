import React from 'react'
import { useSelector } from 'react-redux'

function Messages(props) {
    const cuserid = useSelector(state=>state.auth.user.id);

  return (
    <li>
        {cuserid===props.message?.user?.id?
        <div className='c-user'><span>{props.message?.message}</span></div>
        :<div className='o-user'><span>{props.message?.message}</span></div>
        }
    </li>
  )
}

export default Messages