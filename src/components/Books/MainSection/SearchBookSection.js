import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchedBook from "./SearchedBooks";
import { getBookList } from "../../../actions/BookActions";

function SearchBookSection() {
  let searched = [];
  searched = useSelector((state) => state.book.searchedBookList);
  const bookList = useSelector((state) => state.book.bookList);
  const bookSearchError = useSelector((state) => state.book.bookSearchError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, []);

  return (
    <section>
      <div className="row">
        {searched.length !== 0
          ? bookSearchError === ""
            ? searched?.map((book,index) => {
                return <SearchedBook book={book} key={index} />;
              })
            : bookSearchError
          : bookList?.map((book,index) => {
              return <SearchedBook book={book} key={index}/>;
            })}
      </div>
    </section>
  );
}

export default SearchBookSection;
