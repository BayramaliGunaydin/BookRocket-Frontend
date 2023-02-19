import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchedBook from "./SearchedBooks";
import { getBookList } from "../../../actions/BookActions";

function SearchBookSection() {
  const searched = useSelector((state) => state.book.searchedBookList);
  const bookList = useSelector((state) => state.book.bookList);
  const bookSearchError = useSelector((state) => state.book.bookSearchError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, [dispatch]);

  




  return (
    <section>
      <div className="row">
        {searched.length !== 0
          ? searched?.map((book,index) => {
              return <SearchedBook book={book} index={index} key={index} />;
            }):bookSearchError !== ""?<div className="alert alert-danger" role="alert">
            {bookSearchError}
          </div>       
          : bookList?.map((book,index) => {
              return <SearchedBook book={book} index={index} key={index}/>;
            })}
      </div>
    </section>
  );
}

export default SearchBookSection;
