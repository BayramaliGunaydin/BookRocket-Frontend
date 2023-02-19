import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Modal,Button } from 'semantic-ui-react'
import { getUserFriends } from '../../actions/UserActions';
import UserFriendsModalContent from './UserFriendsModalContent';

function UserFriendsModal(props) {
    const userFriendList = useSelector(state=>state.user.friendList)
    const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);
    const isLogged = useSelector(state=>state.auth.isLogged)
    useEffect(()=>{
      if(isLogged && props.userid!==undefined){
        dispatch(getUserFriends(props.userid,token))
      }
    },[dispatch,props.userid,token,isLogged]);
    return (
    <Modal
    size='tiny'
      open={props.open}
      onClose={() => props.modalToggle(false)}
      onOpen={() => props.modalToggle(true)}
    >
      <Modal.Header>Arkadas Listesi</Modal.Header>
      {userFriendList?.map((friend,index)=><UserFriendsModalContent friend={friend} userid={props.userid} key={index}/>)}
      <Modal.Actions>
        <Button color="black" onClick={() => props.modalToggle(false)}>
          Kapat 
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default UserFriendsModal