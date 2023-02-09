import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import { getBookList } from "../../actions/BookActions";

const BookSection = () => {
  let bookList = useSelector((state) => state.book.bookList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBookList());
  }, []);

  return (
    <section className="book-section">
      <div className="container">
        <h2>Tüm Zamanların En Çok Beğeni Alanları</h2>
        <div className="row">
          {bookList?.map((book,index) => {
            return <Book book={book} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
