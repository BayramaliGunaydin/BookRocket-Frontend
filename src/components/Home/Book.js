const Book = ({ book }) => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pt-4">
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
          <button className="btn btn-primary">İncele</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
