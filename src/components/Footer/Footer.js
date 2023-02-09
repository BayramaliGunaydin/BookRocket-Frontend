const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row align-items-center footer-inner">
          <div className="col-sm-6 text-center">
            <h6>Book Rocket Copyright © 2023</h6>
          </div>
          <div className="col-sm-6">
            <ul className="social-links d-flex p-0">
              <li>
                <a href="">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
