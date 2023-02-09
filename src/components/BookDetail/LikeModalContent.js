import React from 'react'
import { Header, Image, Modal } from 'semantic-ui-react'

function LikeModalContent(props) {
  console.log(props)
  return (
    <Modal.Content image>
        <Image className='like-modal-img' size='small' src={`data:image/jpg;base64,`+props.user.pic} wrapped />
        <Modal.Description>
          <Header>{props.user.username}</Header>
        </Modal.Description>
      </Modal.Content>
  )
}

export default LikeModalContent