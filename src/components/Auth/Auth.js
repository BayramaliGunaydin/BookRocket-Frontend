import { useState } from "react";
import img from "../../img/rocket.png";
import { login, register } from "../../actions/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [auth, setAuth] = useState("login");
  const [loginusername, setLoginusername] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [registerusername, setRegisterusername] = useState("");
  const [registerpassword, setRegisterpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formChange = () => {
    let authLogin = document.querySelector(".auth-login");
    let authRegister = document.querySelector(".auth-register");
    if (auth === "login") {
      authLogin.classList.remove("showLogin");
      authRegister.classList.remove("removeRegister");
      authLogin.classList.add("removeLogin");
      authRegister.classList.add("showRegister");
      setAuth("register");
    } else {
      authLogin.classList.remove("removeLogin");
      authRegister.classList.remove("showRegister");
      authLogin.classList.add("showLogin");
      authRegister.classList.add("removeRegister");
      setAuth("login");
    }
  };

  const onLoginInputsChange = (e) => {
    e.target.name === "username"
      ? setLoginusername(e.target.value)
      : setLoginpassword(e.target.value);
    console.log("login", loginusername, loginpassword);
  };

  const onRegisterInputsChange = (e) => {
    e.target.name === "username"
      ? setRegisterusername(e.target.value)
      : setRegisterpassword(e.target.value);
    console.log("register:", registerusername, registerpassword);
  };

  const onLoginFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginusername, loginpassword));
    navigate("/");
  };
  const onRegisterFormSubmit = (e) => {
    e.preventDefault();
    dispatch(register(registerusername, registerpassword));
    navigate("/");
  };

  return (
    <div className="auth">
      <div className="auth-login auth-form w-100 mx-auto">
        <div className="card  col-sm-8 col-md-6 col-lg-4 mx-auto">
          <form
            action=""
            onChange={onLoginInputsChange}
            onSubmit={onLoginFormSubmit}
            className="login-form card-body"
          >
            <h2>Giriş Yap</h2>
            <img src={img} alt="" className="auth-rocket" />
            <label htmlFor="username" className="form-label">
              Kullanıcı Adı
            </label>
            <input type="text" className="form-control" name="username" />
            <label htmlFor="password" className="form-label">
              Şifre
            </label>
            <input type="password" className="form-control" name="password" />
            <button className="btn btn-outline-light w-100 mt-5" type="submit">
              Giriş Yap
            </button>
          </form>
          <button className="btn btn-light" onClick={formChange}>
            Hesabın yok mu? Hemen Kayıt ol
          </button>
        </div>
      </div>
      <div className="auth-register auth-form w-100 mx-auto">
        <div className="card  col-sm-8 col-md-6 col-lg-4 mx-auto">
          <form
            action=""
            onChange={onRegisterInputsChange}
            onSubmit={onRegisterFormSubmit}
            className="register-form card-body"
          >
            <h2>Kayıt Ol</h2>
            <img src={img} alt="" className="auth-rocket" />
            <label htmlFor="username" className="form-label">
              Kullanıcı Adı
            </label>
            <input type="text" className="form-control" name="username" />
            <label htmlFor="password" className="form-label">
              Şifre
            </label>
            <input type="password" className="form-control" name="password" />
            <button className="btn btn-outline-light w-100 mt-5" type="submit">
              Kayıt Ol
            </button>
          </form>
          <button className="btn btn-light" onClick={formChange}>
            Hesabın var mı? Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
