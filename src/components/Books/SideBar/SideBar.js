import { useEffect } from "react";
import BookAuthorSearch from "./BookAuthorSearch";
import BookNameSearch from "./BookNameSearch";
import BookTopicSearch from "./BookTopicSearch";

const SideBar = () => {

  useEffect(()=>{
  const sidebar = document.querySelector('.side-bar');
  const observerSideBar = new IntersectionObserver(entries => {
 
   sidebar.classList.toggle("animation-side-bar",entries[0].isIntersecting)

});
observerSideBar.observe( sidebar );
  },[])
  


  
  return (
    <section className="side-bar">
      <ul className="list-group list-group-flush">
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
