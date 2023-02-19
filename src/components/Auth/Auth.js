import { useEffect, useState } from "react";
import img from "../../img/rocket.png";
import { resetAuthError } from "../../actions/AuthActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Resizer from 'react-image-file-resizer';
import userimg from "../../img/user.png"

const Auth = () => {
  const [auth, setAuth] = useState("login");
  const [loginusername, setLoginusername] = useState("");
  const [loginpassword, setLoginpassword] = useState("");
  const [registerusername, setRegisterusername] = useState("");
  const [registerpassword, setRegisterpassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authError,setAuthError]=useState("")


 /* const resizeFile = (file) => new Promise(resolve => {
    Resizer.imageFileResizer(file, 300, 300, 'JPEG', 100, 0,
    uri => {
      resolve(uri);
    }, "base64" );
});*/

  const formChange = (e) => {
    const inputs = document.querySelectorAll(".form-control")
    inputs.forEach(input=>{
      input.value=""
    })
    setLoginusername("");
    setLoginpassword("");
    setRegisterusername("");
    setRegisterpassword("");
    let authLogin = document.querySelector(".auth-login");
    let authRegister = document.querySelector(".auth-register");
    setAuthError("")
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
  };

  const onRegisterInputsChange = (e) => {
    e.target.name === "username"
      ? setRegisterusername(e.target.value)
      : setRegisterpassword(e.target.value);
  };

  useEffect(()=>{
    dispatch(resetAuthError());
    const auth = document.querySelector('.auth');
    const observerAuth = new IntersectionObserver(entries => {
   
     auth.classList.toggle("animation-auth",entries[0].isIntersecting)
  
  });
  observerAuth.observe( auth );
  },[dispatch])



  const onLoginFormSubmit =(e) => {
    e.preventDefault();
    axios
    .post("http://localhost:9009/login", { username:loginusername, password:loginpassword })
    .then((res) => {
      dispatch({ type: "LOGIN", payload: res.data });
    navigate("/");})
    .catch((error)=>{
      setAuthError(error.response.data);
      }
    );   
  };

  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL=dataURL.substring(22);
  }

 

  const onRegisterFormSubmit = async(e) => {
    e.preventDefault();
    const userimage =getBase64Image(document.querySelector(".imgg"));
    axios
    .post("http://localhost:9009/register", { username:registerusername, password:registerpassword,base64:userimage})
    .then((res) => {
      dispatch({ type: "REGISTER", payload: res.data });
    navigate("/");})
    .catch((error)=>{
      setAuthError(error.response.data);
      }
    );
  };
  
  return (
    <div className="auth">
      <img src={userimg} alt="" className="imgg" />
      {authError!==""?
      <div className="col-sm-8 col-md-6 col-lg-4 mx-auto">
        
        <div class="alert alert-danger" role="alert">
           {authError}
        </div></div>:""}
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
