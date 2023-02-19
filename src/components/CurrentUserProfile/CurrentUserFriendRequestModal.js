import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal,Button } from 'semantic-ui-react'
import CurrentUserFriendRequestModalContent from './CurrentUserFriendRequestModalContent';
import { getUserFriendRequests } from '../../actions/AuthActions';

function CurrentUserFriendRequestModal(props) {
  const isLogged = useSelector(state=>state.auth.isLogged)
    const userFriendRequests = useSelector(state=>state.auth.friendRequests);
    const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);

    useEffect(()=>{
      if(isLogged){
        dispatch(getUserFriendRequests(token))
      }
    },[isLogged,token,dispatch,props.open])


    return (
        <Modal
        size='tiny'
          open={props.open}
          onClose={() => props.modalToggle(false)}
          onOpen={() => props.modalToggle(true)}
        >
          <Modal.Header>Arkadaslik Istekleri</Modal.Header>
          {userFriendRequests?.map(friendRequest=><CurrentUserFriendRequestModalContent friendRequest={friendRequest} userid={props.userid}/>)}
          <Modal.Actions>
            <Button color="black" onClick={() => props.modalToggle(false)}>
              Kapat 
            </Button>
          </Modal.Actions>
        </Modal>
      )
}

export default CurrentUserFriendRequestModal