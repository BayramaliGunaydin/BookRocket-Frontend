import { Link } from "react-router-dom";

const SearchedBook = ({ book }) => {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 pt-4">
      <div className="card book-card p-2">
        <div className="book-card-content">
          <img
            className="p-2"
            src={`data:image/jpg;base64,` + book.pic}
            alt=""
          />

          <div className="card-body">
            <h6 className="card-title">{book.bookname}</h6>
            <p className="card-title">{book.topicbook}</p>
            <p>{book.author}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span>{book.likes?.length} Beğeni</span>
          <Link to={"/bookdetail/" + book.id}>
            <button className="btn btn-primary">İncele</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchedBook;
