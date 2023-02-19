import React from "react";

function UserPosts(props) {
  return (
    <li className="list-group-item user-post-list-item">
      <img src={`data:image/jpg;base64,` + props.post?.book?.pic} alt="" />
      <div className="user-post-list-item-details">
        <h6>{props.post?.book?.bookname}</h6>
        <p>{props.post?.post}</p>
      </div>
    </li>
  );
}

export default UserPosts;
