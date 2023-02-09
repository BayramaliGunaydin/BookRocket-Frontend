import BookAuthorSearch from "./BookAuthorSearch";
import BookNameSearch from "./BookNameSearch";
import BookTopicSearch from "./BookTopicSearch";

const SideBar = () => {
  return (
    <section className="side-bar">
      <ul class="list-group list-group-flush">
        <li className="list-group-item">
          <BookNameSearch />
        </li>
        <li className="list-group-item">
          <BookTopicSearch />
        </li>
        <li className="list-group-item">
          <BookAuthorSearch />
        </li>
      </ul>
    </section>
  );
};

export default SideBar;
