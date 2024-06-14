import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="footer section text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="social-media">
                <li>
                  <Link to="https://www.facebook.com/">
                    <i className="tf-ion-social-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/">
                    <i className="tf-ion-social-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.twitter.com/">
                    <i className="tf-ion-social-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to="https://www.pinterest.com/">
                    <i className="tf-ion-social-pinterest"></i>
                  </Link>
                </li>
              </ul>
              <ul className="footer-menu text-uppercase">
                <li>
                  <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                  <Link to="/shop">SHOP</Link>
                </li>
                <li>
                  <Link to="/#">Pricing</Link>
                </li>
                <li>
                  <Link to="/#">PRIVACY POLICY</Link>
                </li>
              </ul>
              <p className="copyright-text">Copyright &copy;2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
