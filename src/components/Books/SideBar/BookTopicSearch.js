import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTopicName } from "../../../actions/BookActions";

function BookTopicSearch() {
  const [topicname, setTopicname] = useState();
  const dispatch = useDispatch();

  const onTopicNameChange = (e) => {
    setTopicname(e.target.value);
  };

  const onTopicNameSubmit = (e) => {
    e.preventDefault();
    dispatch(searchTopicName(topicname));
  };
  return (
    <form action="" onSubmit={onTopicNameSubmit} onChange={onTopicNameChange}>
      <label htmlFor="topic" className="form-label">
        Kitap Türünü Ara
      </label>
      <div className="input-group">
        <input type="text" className="form-control" name="topic" />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </div>
    </form>
  );
}

export default BookTopicSearch;
