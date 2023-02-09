import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchAuthorName } from "../../../actions/BookActions";

function BookAuthorSearch() {
  const [authorname, setAuthorname] = useState();
  const dispatch = useDispatch();

  const onAuthorNameChange = (e) => {
    setAuthorname(e.target.value);
  };

  const onAuthorNameSubmit = (e) => {
    e.preventDefault();
    dispatch(searchAuthorName(authorname));
  };
  return (
    <form action="" onSubmit={onAuthorNameSubmit} onChange={onAuthorNameChange}>
      <label htmlFor="author" className="form-label">
        Yazar Ara
      </label>
      <div className="input-group">
        <input type="text" className="form-control" name="author" />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </div>
    </form>
  );
}

export default BookAuthorSearch;
