import React, { useEffect, useState } from 'react'
import Search from './Search'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../actions/UserActions';
import SearchResult from './SearchResult';
import { getCurrentUserFriends, getSendedFriendRequests, getUserFriendRequests, resetPositiveAlert } from '../../actions/AuthActions';


function SearchUser() {

  const searchedUsers=useSelector(state=>state.user.searchedUsers)
  const [notFound,setNotFound]=useState(false);
  const [searched,setSearched]=useState(false);
  const dispatch = useDispatch();
  const sendedFriendRequests = useSelector(state=>state.auth.sendedFriendRequests)
 // const friendRequests = useSelector(state=>state.auth.friendRequests);
  const userid = useSelector(state=>state.auth.user.id);
  const [username,setUsername]=useState("");
  const token = useSelector(state=>state.auth.token);
  const positiveAlert = useSelector(state=>state.auth.positiveAlert)
  const isLogged = useSelector(state=>state.auth.isLogged)

  const onSearch=(username)=>{
    setSearched(true);
    dispatch(searchUser(username,token));
  }

  useEffect(()=>{
    if(isLogged){
    dispatch(getSendedFriendRequests(token))   
    dispatch(getCurrentUserFriends(userid,token))
    dispatch(getUserFriendRequests(token));
    }
  },[dispatch,isLogged,token,userid])
  
  useEffect(() => {
    let timer; 
    if(positiveAlert!==""){   
    timer = setTimeout(()=>{
      dispatch(resetPositiveAlert());       
    },3000)
   
  }
    return ()=> clearTimeout(timer); 
  }, [positiveAlert,dispatch]);



  useEffect(()=>{
    setNotFound(false);
    if(searchedUsers.length===0&&searched){
      setNotFound(true);
    }
  },[searchedUsers,searched])

  return (
    <main className='search-user-main'>
        <div className="container">
            <div className="row">
              <div className='search-user-main-content'>
                <div className="col-md-8 col-lg-6 mx-auto">
                {positiveAlert!=="" && positiveAlert!==undefined?<div class="alert alert-success"   role="alert">
                         {positiveAlert}
                      </div>:""}
                    <Search onSearch={onSearch} username={username} setUsername={setUsername} />
                </div>
                <div className="col-md-10 col-lg-8 mx-auto searched-users">
                  {notFound ? (<div className="alert alert-dark mt-4" role="alert">
 Girdiğiniz Kullanıcı Adı ile Kullanıcı Bulunamadı...
</div>):(searched?searchedUsers.map((searchedUser,index)=><SearchResult searchedUser={searchedUser} sendedFriendRequests={sendedFriendRequests} 
key={index}/>):"")}
                
                                
                </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default SearchUser