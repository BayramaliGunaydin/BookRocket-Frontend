import { useEffect } from "react";
import { Link } from "react-router-dom";

const SearchedBook = (props) => {

  useEffect(()=>{
    const cards = document.querySelectorAll('.book-card');
  const observerCards = new IntersectionObserver(entries => {
  entries.forEach(entry=>{
    entry.target.classList.toggle("animation-book-card",entry.isIntersecting)
  })
});

cards.forEach(card=>{
  observerCards.observe( card );
},[cards])
  })
  return (
    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 pt-4">
      <div className={`card book-card p-2`}>
        <div className="book-card-content">
          <img
            className="p-2"
            src={`data:image/jpg;base64,` + props.book?.pic}
            alt=""
          />

          <div className="card-body">
            <h6 className="card-title">{props.book?.bookname}</h6>
            <p className="card-title">{props.book?.topicbook}</p>
            <p>{props.book?.author}</p>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span>{props.book?.likes?.length} Beğeni</span>
          <Link to={"/bookdetail/" + props.book?.id}>
            <button className="btn btn-primary">İncele</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchedBook;
