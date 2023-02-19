import { useDispatch, useSelector } from "react-redux";
import { searchBookName } from "../../../actions/BookActions";
import { useState } from "react";

const BookNameSearch = () => {
  const [bookname, setBookname] = useState();
  const dispatch = useDispatch();
  const token = useSelector(state=>state.auth.token);

  const onBookNameChange = (e) => {
    setBookname(e.target.value);
  };

  const onBookNameSubmit = (e) => {
    e.preventDefault();
    dispatch(searchBookName(bookname,token));
  };

  return (
    <form action="" onSubmit={onBookNameSubmit} onChange={onBookNameChange}>
      <label htmlFor="name" className="form-label">
        Kitap Adını Ara
      </label>
      <div className="input-group">
        <input type="text" className="form-control" name="name" />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>
      </div>
    </form>
  );
};

export default BookNameSearch;
