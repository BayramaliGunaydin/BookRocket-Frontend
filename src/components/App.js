import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { Routes, Router, Route, BrowserRouter } from "react-router-dom";
import Auth from "./Auth/Auth";
import BookMain from "./Books/BookMain";
import About from "./About/about";
import CurrentUserProfile from "./CurrentUserProfile/CurrentUserProfile";
import Logout from "./Logout/Logout";
import BookDetail from "./BookDetail/BookDetail";
import 'semantic-ui-css/semantic.min.css';
import UserProfile from "./Profile/UserProfile";
import SearchUser from "./SearchUser/SearchUser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-register" element={<Auth />} />
        <Route path="/kitaplar" element={<BookMain />} />
        <Route path="/hakkimizda" element={<About />} />
        <Route path="/profile" element={<CurrentUserProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/bookdetail/:id" element={<BookDetail />} />
        <Route path="/userprofile/:id" element={<UserProfile />} />
        <Route path="/searchuser" element={<SearchUser/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
