import React from 'react'

function UserLikes(props) {
    return (
        <li className="list-group-item user-like-list-item">
          <img src={`data:image/jpg;base64,` + props.like?.booklike?.pic} alt="" />
          <h6>{props.like?.booklike?.bookname}</h6>
        </li>
      );
}

export default UserLikes