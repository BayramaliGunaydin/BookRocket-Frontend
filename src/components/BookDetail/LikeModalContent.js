import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Image, Modal } from 'semantic-ui-react'

function LikeModalContent(props) {
  console.log(props)
  return (
    <Modal.Content image>
        <Image className='like-modal-img' size='small' src={`data:image/jpg;base64,`+props.user?.pic} wrapped />
        <Modal.Description className='like-modal-description'>
          <Header className='like-modal-description-header'>
           <Link to={"/userprofile/"+props.user?.id}>{props.user?.username}</Link> </Header>
        </Modal.Description>
      </Modal.Content>
  )
}

export default LikeModalContent