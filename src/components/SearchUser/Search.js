import { useState } from "react";

const Search = (props) => {
  const [username,setUsername]=useState("");
  
  const onNameChange=(e)=>{
    setUsername(e.target.value)
  }


  const onNameSubmit = (e)=>{
    e.preventDefault();
    props.onSearch(username);
    e.target.elements[0].value="";
  }
  
  return (
    <>
      <form className="input-group w-50 mx-auto" onSubmit={onNameSubmit} onChange={onNameChange}>
        <input type="text" placeholder="Kullanıcı Adı Ara" className="form-control" />
        <button type="submit" className="btn btn-primary">
          Ara
        </button>      
      </form>
    </>
  );
};

export default Search;
