import React, { useEffect } from 'react'
import { getUser, getUserLikes, getUserPosts } from '../../actions/UserActions';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserPosts from './UserPosts';
import UserLikes from './UserLikes';

function UserProfile() {
    const user = useSelector((state) => state.user.user);
    const currentUser = useSelector(state=>state.auth.user)
    const userposts = useSelector((state) => state.user.posts);
    const userlikes = useSelector((state) => state.user.likes);
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(currentUser.id,currentUser.id)
        if(params.id==currentUser.id){
            navigate("/profile");
        }else{   
      dispatch(getUser(params.id));
      dispatch(getUserPosts(params.id));
      dispatch(getUserLikes(params.id));}
    }, []);
  
    return (
      <main className="user-profile">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card-header">
                <div className="profile-img">
                  <img src={`data:image/jpg;base64,` + user.pic} alt="" />
                </div>
                <div className="profile-name">
                  <h2>{user.username}</h2>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-10 mx-auto">
                    <h4 className="p-4 text-center">{user.username} Adlı Kullanıcının Yorumları</h4>
                    <ul class="list-group list-group-flush user-post-list">
                      <li class="list-group-item"></li>
                      {userposts?.map((post,index) => {
                        return <UserPosts post={post} key={index} />;
                      })}
                    </ul>
                  </div>
                  <div className="col-10 mx-auto">
                    <h4 className="p-4 text-center">{user.username} Adlı Kullanıcının Beğendikleri</h4>
                    <ul class="list-group list-group-flush user-like-list">
                      <li class="list-group-item"></li>
                      {userlikes?.map((like,index) => {
                        return <UserLikes like={like} key={index} />;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
}

export default UserProfile