import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import { getMostPostedBooks } from "../../actions/BookActions";

const BookSection2 = () => {
  let mostPostedBooks = useSelector((state) => state.book.mostPostedBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMostPostedBooks());
  }, [dispatch]);

  return (
    <section className="book-section">
      <div className="container">
        <h2>En Çok Yorum Yapılan Kitaplar</h2>
        <div className="row">
          {mostPostedBooks?.map((book,index) => {
            return <Book book={book} key={index} index={index}/>;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookSection2;
