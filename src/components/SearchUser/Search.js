import {  useEffect} from "react";



const Search = (props) => {



  useEffect(()=>{
    const search = document.querySelector('.search');
    const observerSearch = new IntersectionObserver(entries => {
   
      search.classList.toggle("animation-search",entries[0].isIntersecting)
  
  });
  observerSearch.observe( search );
  },[])
 


  const onNameChange=(e)=>{
    props.setUsername(e.target.value)
  }


  const onNameSubmit = (e)=>{
    e.preventDefault();
    props.onSearch(props.username);
    e.target.elements[0].value="";
    const searchuser = document.querySelector('.searched-users');
  const observerSearchUser = new IntersectionObserver(entries => {
 
    searchuser.classList.toggle("animation-search-user",entries[0].isIntersecting)

});
observerSearchUser.observe( searchuser );
  }
  
  return (
    <>
      <form className="input-group search" onSubmit={onNameSubmit} onChange={onNameChange}>
        <input type="text" placeholder="Kullanıcı Adı Ara" className="form-control" />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>      
      </form>
    </>
  );
};

export default Search;
