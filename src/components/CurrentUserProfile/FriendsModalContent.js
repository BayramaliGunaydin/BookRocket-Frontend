import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { deleteFriendShip } from '../../actions/AuthActions';

function FriendsModalContent(props) {
  const token = useSelector(state=>state.auth.token);

  const dispatch = useDispatch();
  const onDeleteFriendship=()=>{
    dispatch(deleteFriendShip(props.friend.id,token))
  }

  return (
    <Modal.Content image className='friend-modal-content'>
        <Image className='friend-modal-content-img' size='small' src={`data:image/jpg;base64,`+props.friend?.pic} wrapped />
        <Modal.Description className='friend-modal-content-description'>
          <Header className='friend-modal-content-description-header'><Link to={"/userprofile/"+props.friend.id}>{props.friend?.username}</Link></Header>
          <Button color='red' onClick={onDeleteFriendship} className='friend-modal-content-description-button'><Icon name='remove' />Çıkart</Button>
        </Modal.Description>
      </Modal.Content>
  )
}

export default FriendsModalContent