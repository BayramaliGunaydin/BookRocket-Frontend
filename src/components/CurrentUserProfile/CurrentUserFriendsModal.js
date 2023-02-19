import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal,Button } from 'semantic-ui-react'
import FriendsModalContent from './FriendsModalContent';
import { getCurrentUserFriends } from '../../actions/AuthActions';

function CurrentUserFriendsModal(props) {
    const isLogged = useSelector(state=>state.auth.isLogged)
    const userFriendList = useSelector(state=>state.auth.friendList)
    const token = useSelector(state=>state.auth.token);
    const dispatch = useDispatch();
    useEffect(()=>{
      if(isLogged){
        dispatch(getCurrentUserFriends(props.userid,token))}
    },[dispatch,props.userid,isLogged,token,props.open]);
    return (
    <Modal
    size='tiny'
      open={props.open}
      onClose={() => props.modalToggle(false)}
      onOpen={() => props.modalToggle(true)}
    >
      <Modal.Header>Arkadas Listesi</Modal.Header>
      {userFriendList?.map((friend,index)=><FriendsModalContent friend={friend} userid={props.userid} key={index}/>)}
      <Modal.Actions>
        <Button color="black" onClick={() => props.modalToggle(false)}>
          Kapat 
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default CurrentUserFriendsModal