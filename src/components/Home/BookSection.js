import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import { getMostLikedBooks } from "../../actions/BookActions";

const BookSection = () => {
  let mostLikedBooks = useSelector((state) => state.book.mostLikedBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMostLikedBooks());
  }, [dispatch]);

  return (
    <section className="book-section">
      <div className="container">
        <h2>En Çok Beğeni Alan Kitaplar</h2>
        <div className="row">
          {mostLikedBooks?.map((book,index) => {
            return <Book book={book} key={index} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BookSection;
