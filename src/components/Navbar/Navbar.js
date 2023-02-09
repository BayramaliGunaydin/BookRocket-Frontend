import { NavLink } from "react-router-dom";
import img from "../../img/Logo.png";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLogged = useSelector((state) => state.auth.isLogged);
  
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
              {/* <li>
                <NavLink to="/hakkimizda">Hakkımızda</NavLink>
              </li> */}
              <li>
                <NavLink to="/searchuser">Kullanıcı Ara</NavLink>
              </li>
              {isLogged ? (
                <>
                  <li>
                    <button className="btn btn-outline-light">
                      <NavLink to="/profile">
                        <i class="fa-solid fa-user"></i> Profil
                      </NavLink>
                    </button>
                  </li>
                  <li>
                    <NavLink to="/logout">
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <button className="btn btn-outline-light">
                    <NavLink to="/login-register">Üye Ol/Giriş Yap</NavLink>
                  </button>
                </li>               
              )}
            </ul>
          </div>
            <button onClick={toggleNav} className="btn btn-outline-light nav-toggle"><i class="fa-solid fa-bars"></i></button>
            
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
