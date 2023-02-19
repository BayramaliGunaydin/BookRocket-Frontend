import React from 'react'
import { Link } from 'react-router-dom'
import {Header, Image, Modal } from 'semantic-ui-react'

function UserFriendsModalContent(props) {



  return (
    <Modal.Content image className='friend-modal-content'>
        <Image className='friend-modal-content-img' size='small' src={`data:image/jpg;base64,`+props.friend?.pic} wrapped />
        <Modal.Description className='friend-modal-content-description'>
          <Header className='friend-modal-content-description-header'><Link to={"/userprofile/"+props.friend?.id}>{props.friend?.username}</Link></Header>
        </Modal.Description>
      </Modal.Content>
  )
}

export default UserFriendsModalContent