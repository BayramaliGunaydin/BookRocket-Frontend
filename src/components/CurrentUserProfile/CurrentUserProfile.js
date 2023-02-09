import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CurrentUserPosts from "./CurrentUserPosts";
import { getCurrentUserLikes, getCurrentUserPosts} from "../../actions/UserActions";
import CurrentUserLikes from "./CurrentUserLikes";

function Profile() {
  const user = useSelector((state) => state.auth.user);
  const userposts = useSelector((state) => state.user.currentUserPosts);
  const userlikes = useSelector((state) => state.user.currentUserLikes);
  const dispatch = useDispatch();
  console.log(userposts);
  useEffect(() => {
    dispatch(getCurrentUserPosts(user.id));
    dispatch(getCurrentUserLikes(user.id));
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
                  <h4 className="p-4 text-center">Yorumlarınız</h4>
                  <ul class="list-group list-group-flush user-post-list">
                    <li class="list-group-item"></li>
                    {userposts?.map((post,index) => {
                      return <CurrentUserPosts post={post} key={index} />;
                    })}
                  </ul>
                </div>
                <div className="col-10 mx-auto">
                  <h4 className="p-4 text-center">Beğendikleriniz</h4>
                  <ul class="list-group list-group-flush user-like-list">
                    <li class="list-group-item"></li>
                    {userlikes?.map((like,index) => {
                      return <CurrentUserLikes like={like} key={index} />;
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

export default Profile;
