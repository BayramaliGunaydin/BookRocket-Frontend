import moment from "moment/moment";
import "moment/locale/tr"
import React from "react";
import { Link } from "react-router-dom";

function BookPost(props) {
  moment.locale("tr")
  let date = moment(props.post?.postdate);
  return (
    <div className="card">
      <div className="post">
        <img
          src={`data:image/jpg;base64,` + props.post?.customuser?.pic}
          alt=""
        />
        <div className="post-details">
          <Link to={"/userprofile/"+props.post?.customuser?.id}><h5>{props.post?.customuser?.username}</h5></Link>
          <p>{props.post?.post}</p>
          <p>{date.format("LLL")}</p>
        </div>
      </div>
    </div>
  );
}

export default BookPost;
