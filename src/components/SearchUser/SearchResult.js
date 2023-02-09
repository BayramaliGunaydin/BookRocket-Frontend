import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

function SearchResult(props) {
  return (
    <div className="card user-search-content">
        <div className='user-search-content-img'>
        <img src={`data:image/jpg;base64,`+props.searchedUser?.pic} alt="" />
        </div>
        <Link to={"/userprofile/"+props.searchedUser?.id}><h4>{props.searchedUser?.username}</h4> </Link>
    </div>
  )
}

export default SearchResult