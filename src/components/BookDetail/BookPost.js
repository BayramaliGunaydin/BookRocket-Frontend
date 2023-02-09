import React from "react";

function BookPost(props) {
  return (
    <div className="card">
      <div className="post">
        <img
          src={`data:image/jpg;base64,` + props.post.customuser.pic}
          alt=""
        />
        <div className="post-details">
          <h5>{props.post.customuser.username}</h5>
          <p>{props.post.post}</p>
        </div>
      </div>
    </div>
  );
}

export default BookPost;
