import img from "../../img/rocket.png";

const HomeHeader = () => {
  return (
    <div className="header">
      <img src={img} className="rocket" alt="" />
      <div className="home-header">
        <div className="home-header-content">
          <div className="home-header-content-inner">
            <h1>Book Rocket'a Hoşgeldin!</h1>
            <p className="lead">
              Book Rocket'ta yeni bir dünyayı keşfetmeye hazır mısın?
            </p>
            <button className="btn btn-outline-light">
              Daha Fazlasını Öğren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
