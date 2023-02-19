import { NavLink } from "react-router-dom";
import img from "../../img/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSendedFriendRequests, getUserFriendRequests } from "../../actions/AuthActions";

const Navbar = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  const user = useSelector(state=>state.auth.user);
  const dispatch = useDispatch();
  const not_count= useSelector(state=>state.auth.notification);
  const token = useSelector(state=>state.auth.token);
  
  useEffect(()=>{     
    if(isLogged){
      dispatch(getUserFriendRequests(token))
      dispatch(getSendedFriendRequests(token)); 
      if(not_count>0){
        document.querySelector(".profile-notification").classList.add("show");
      }else{
        document.querySelector(".profile-notification").classList.remove("show");
      }
    }
  },[not_count,isLogged,dispatch,user?.id,token])

  useEffect(()=>{

  },[user?.role?.rolename])


  
  const toggleNav = ()=>{
    const navbar = document.querySelector(".navbar-custom");
    navbar.classList.toggle("show")
  }



  return (
    <nav className="navbar-custom navbar-dark">
      <div className="container">
        <div className="row w-100">
          <div className="col-4 d-flex align-items-center brand-logo">
            <img src={img} alt="" width="50px" />
            <span className="ps-2">Book Rocket</span>
          </div>
  
          <div className="col-8 d-flex align-items-center navigation">
            <ul className="d-flex align-items-center justify-content-between m-0">
              <li>
                <NavLink to="/">Anasayfa</NavLink>
              </li>
              <li>
                <NavLink to="/kitaplar">Kitaplar</NavLink>
              </li>
              <li>
                <NavLink to="/searchuser">Kullanıcı Ara</NavLink>
              </li>
              {isLogged ? (
                <>
                  <li><NavLink to="/profile">
                    <button className="btn btn-outline-light profile-button">
                      
                        <i class="fa-solid fa-user"></i> Profil
                      
                      <span className="profile-notification">{not_count}</span>
                    </button></NavLink>
                  </li>
                  {user?.role?.rolename ==="EDITOR"? <li>
                  <NavLink to="/editorpanel">
                    <button className="btn btn-outline-light">
                      <i className="fa-solid fa-book"></i>
                    </button>
                  </NavLink>
                </li> :"" }
                  <li>
                    <NavLink to="/logout">
                      <i className="fa-solid fa-right-from-bracket"></i>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li><NavLink to="/login-register">
                  <button className="btn btn-outline-light">
                    Üye Ol/Giriş Yap
                  </button></NavLink>
                </li>               
              )}
            </ul>
          </div>
            <button onClick={toggleNav} className="btn btn-outline-light nav-toggle"><i className="fa-solid fa-bars"></i></button>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
