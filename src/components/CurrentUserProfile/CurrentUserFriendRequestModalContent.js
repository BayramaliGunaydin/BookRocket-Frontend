import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import { acceptFriendRequests, rejectFriendRequests } from '../../actions/AuthActions';

function CurrentUserFriendRequestModalContent(props) {

    const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);

    const onAccept = ()=>{
        dispatch(acceptFriendRequests(props.friendRequest,token));
    }

    const onReject = ()=>{
        dispatch(rejectFriendRequests(props.friendRequest,token))
    }

    return (
        <div className='friend-request-content'>
        <Modal.Content image>
            <Image className='friendrequests-modal-img' size='small' src={`data:image/jpg;base64,`+props.friendRequest?.pic} wrapped />
            <Modal.Description className='friendrequests-modal-description'>
              <Header className='friendrequests-modal-header'><Link  to={"/userprofile/"+props.friendRequest?.id}>{props.friendRequest?.username}</Link></Header>
              <div className='friendrequests-modal-buttons'>
                <Button color='red' onClick={onReject}>
          <Icon name='remove' /> Reddet
        </Button>
        <Button color='green' onClick={onAccept}>
          <Icon name='checkmark' /> Kabul Et
        </Button></div>
              
            </Modal.Description>
          </Modal.Content>
          </div>
      )
}

export default CurrentUserFriendRequestModalContent