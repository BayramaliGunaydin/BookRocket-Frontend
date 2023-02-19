import React, { useState } from 'react'
import UserImageModal from './UserImageModal';
import CurrentUserFriendsModal from './CurrentUserFriendsModal';
import CurrentUserFriendRequestModal from './CurrentUserFriendRequestModal';
import { setEditor } from '../../actions/AuthActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CurrentUserProfileHeader(props) {
    const [selectedImage,setSelectedImage]=useState("");
    const [imageOpen,setImageOpen] = useState(false);
    const [friendOpen,setFriendOpen] = useState(false);
    const [friendRequestOpen,setFriendRequestOpen] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(state=>state.auth.token);

    const onImageModalToggle=(toggle)=>{
        setImageOpen(toggle);
        setSelectedImage("");
      }

    const onFriendModalToggle = (toggle)=>{
        setFriendOpen(toggle)
    }  

    const onFriendRequestModalToggle = (toggle)=>{
      setFriendRequestOpen(toggle)
  }  

  const onEditorRequest = ()=>{
    dispatch(setEditor(token))
  }
  return (
    <div className="card-header">
      <UserImageModal open={imageOpen} modalToggle={onImageModalToggle} selectedImage={selectedImage} setSelectedImage={setSelectedImage} userid={props.user?.id}/>
      <CurrentUserFriendsModal open={friendOpen} modalToggle={onFriendModalToggle} userid={props.user?.id}/>
      <CurrentUserFriendRequestModal open={friendRequestOpen} modalToggle={onFriendRequestModalToggle} userid={props.user?.id}/>
      <div className="profile-img">             
        <span className="c-user-img-span" onClick={()=>onImageModalToggle(true)}><img src={`data:image/jpg;base64,` + props.user?.pic} alt="" /></span>              
      </div>
      <div className="profile-name">
        <h2>{props.user?.username}</h2>
      </div>
      <div className="profile-socials">
        {props.user?.role?.rolename==="EDITOR"?"":<button className="btn btn-outline-light" onClick={onEditorRequest}><i className="fa-solid fa-pen-to-square"></i><span> Editör Ol</span></button>}
        
        <Link to={"/chats/"+props.user?.id}>
          <button className="btn btn-outline-light">
          <i className="fa-solid fa-comments"></i>
          <span> Mesajlar</span>
          </button>
        </Link>
         
        <button className="btn btn-outline-light" onClick={()=>onFriendModalToggle(true)}><i className="fa-solid fa-user-group"></i> <span>Arkadaş Listesi</span></button>
        <button className="btn btn-outline-light" onClick={()=>onFriendRequestModalToggle(true)}><i className="fa-solid fa-envelope"></i> <span>Arkadaşlık İstekleri</span> </button>
      </div>            
     </div>
  )
}

export default CurrentUserProfileHeader