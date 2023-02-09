import React, { useEffect, useState } from 'react'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../actions/UserActions';
import SearchResult from './SearchResult';


function SearchUser() {

  const searchedUsers=useSelector(state=>state.user.searchedUsers)
  const [notFound,setNotFound]=useState(false);
  const [searched,setSearched]=useState(false);
  const dispatch = useDispatch();

  const onSearch=(username)=>{
    setSearched(true);
    dispatch(searchUser(username));
  }
  useEffect(()=>{
    setNotFound(false);
    if(searchedUsers.length==0&&searched){
      setNotFound(true);
    }
  },[searchedUsers])

  return (
    <main className='search-user-main'>
        <div className="container">
            <div className="row">
              <div className='search-user-main-content'>
                <div className="col-sm-10 mx-auto">
                    <Search onSearch={onSearch}/>
                </div>
                <div className="col-sm-8 mx-auto">
                  {notFound ? (<div className="alert alert-dark mt-4" role="alert">
 Girdiğiniz Kullanıcı Adı ile Kullanıcı Bulunamadı...
</div>):(searchedUsers.map((searchedUser,index)=><SearchResult searchedUser={searchedUser} key={index}/>))}
                
                                
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default SearchUser