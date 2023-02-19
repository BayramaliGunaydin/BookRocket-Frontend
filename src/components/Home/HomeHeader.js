import img from "../../img/rocket.png";
import { Link } from "react-router-dom";

const HomeHeader = () => {


  return (
    <div className="header">
      <img src={img} className="rocket" alt="" />
      <div className="home-header">
        <div className="home-header-content">
          <div className="home-header-content-inner">
            <h1>Book Rocket'a Hoşgeldin!</h1>
            <p className="lead">
              Book Rocket'ta kitapların dünyasını keşfetmeye hazır mısın?
            </p>
            <Link to="/hakkimizda"><button className="btn btn-outline-light">
              Daha Fazlasını Öğren
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
