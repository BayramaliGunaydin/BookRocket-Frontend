import SearchBookSection from "./MainSection/SearchBookSection";
import SideBar from "./SideBar/SideBar";

const BookMain = () => {
  return (
    <main className="book-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 book-main-aside">
            <SideBar />
          </div>
          <div className="col-lg-9 book-main-section">
            <SearchBookSection />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookMain;
