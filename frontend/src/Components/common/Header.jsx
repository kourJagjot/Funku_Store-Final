import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import shopAll from "../../assests/images/Funko/fandoms/shop_all.png";
import favAndom from "../../assests/images/Funko/fandoms/fandoms_fav.png";
import VideoGame from "../../assests/images/Funko/fandoms/vdo_games.png";
import Anime from "../../assests/images/Funko/fandoms/anime.png";
import Animation from "../../assests/images/Funko/fandoms/cartoons.png";

import catagrey from "../../assests/images/Funko/category/pop.png";
import Bitty from "../../assests/images/Funko/category/pop-bitty.png";
import Rewind from "../../assests/images/Funko/category/rewind.png";
import Vinyl from "../../assests/images/Funko/category/soda.png";
import Gold from "../../assests/images/Funko/category/gold.png";

import NewReleases from "../../assests/images/Funko/featured/new.png";
import Exclisives from "../../assests/images/Funko/featured/exclusive.png";
import BestSeller from "../../assests/images/Funko/featured/best.png";
import Stock from "../../assests/images/Funko/featured/stock.png";
import Comming from "../../assests/images/Funko/featured/comming.png";

import Image1 from "../../assests/images/Funko/product/home-product/pro-1.png";
import Sitelogo from "../../assests/images/Funko/Funko-banner/funko-store-high-resolution-logo-transparent (2).png";

function Header() {
  const CART = useSelector((state) => state.cart.items);
  const totalAmt = CART.reduce(
    (acc, item) => acc + item.price * item.length,
    0
  );
  const itemCount = CART.length;

  return (
    <div className="sticky-header">
      <section className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="contact-number">
                <i className="tf-ion-ios-telephone"></i>
                <span>0123- 12345-025025</span>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="logo text-center">
                <a href="/">
                  <h2>
                    <img
                      src={Sitelogo}
                      style={{ width: "230px" }}
                      alt="image"
                    />
                  </h2>
                </a>
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <ul className="top-menu text-right list-inline">
                <li className="dropdown cart-nav dropdown-slide">
                  <a
                    href="/cart"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-android-cart"></i>
                    Cart
                    {itemCount > 0 && (
                      <span className="cart-badge">{itemCount}</span>
                    )}
                  </a>
                  <div className="dropdown-menu cart-dropdown">
                    {CART.map((item, i) => (
                      <div key={i} className="media">
                        <a className="pull-left" href="/cart">
                          <img
                            className="media-object"
                            src={item.imagrUrl || Image1}
                            alt="image"
                          />
                        </a>
                        <div className="media-body">
                          <h4 className="media-heading">
                            <a href="/cart">{item.productName}</a>
                          </h4>
                          <h5>
                            <strong>${item.price}</strong>
                          </h5>
                        </div>
                        <a href="#!" className="remove">
                          {/* <i className="tf-ion-close"></i> */}
                        </a>
                      </div>
                    ))}
                    <div className="cart-summary">
                      <span>Total</span>
                      <span className="total-price">${totalAmt}</span>
                    </div>
                    <ul className="text-center cart-buttons">
                      <li>
                        <Link to="/cart" className="btn btn-small">
                          View Cart
                        </Link>
                      </li>
                      <li>
                        <a
                          href="checkout"
                          className="btn btn-small btn-solid-border"
                        >
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown search dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                  >
                    <i className="tf-ion-ios-search-strong"></i> Search
                  </a>
                  <ul className="dropdown-menu search-dropdown">
                    <li>
                      <form action="#">
                        <input
                          type="search"
                          className="form-control"
                          placeholder="Search..."
                        />
                      </form>
                    </li>
                  </ul>
                </li>
                <li className="commonSelect">
                  <select className="form-control">
                    <option>EN</option>
                    <option>DE</option>
                    <option>FR</option>
                    <option>ES</option>
                  </select>
                </li>
                <li className="ps-5 ms-5">
                  <a href="/login">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <nav className="navbar navigation">
          <div className="container">
            <div className="navbar-header">
              <h2 className="menu-title">Main Menu</h2>
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#navbar"
                aria-expanded="false"
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse text-center">
              <ul className="nav navbar-nav">
                <li className="dropdown ">
                  <a href="index">Home</a>
                </li>
                <li className="dropdown dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="350"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Fandoms <span className="tf-ion-ios-arrow-down"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={shopAll}
                          alt="shop all"
                        />{" "}
                        Shop All
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={favAndom}
                          alt="favorites"
                        />
                        Fandoms Favorites
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={VideoGame}
                          alt="video games"
                        />{" "}
                        Video Games
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Anime}
                          alt="anime & manga"
                        />{" "}
                        Anime & Manga
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Animation}
                          alt="animation and cartoons"
                        />
                        Animation & Cartoons
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="350"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Category <span className="tf-ion-ios-arrow-down"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={catagrey}
                          alt="shop all"
                        />{" "}
                        Pop!
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Bitty}
                          alt="favorites"
                        />
                        Pop! Bitty
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Rewind}
                          alt="video games"
                        />{" "}
                        Pop! Rewind
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Vinyl}
                          alt="anime & manga"
                        />{" "}
                        Vinyl Soda
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Gold}
                          alt="animation and cartoons"
                        />
                        Vinyl Gold
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown dropdown-slide">
                  <a
                    href="#!"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    data-hover="dropdown"
                    data-delay="350"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Featured <span className="tf-ion-ios-arrow-down"></span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={NewReleases}
                          alt="shop all"
                        />{" "}
                        New Releases
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Exclisives}
                          alt="favorites"
                        />
                        Exclisives
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={BestSeller}
                          alt="video games"
                        />{" "}
                        Best Seller
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Stock}
                          alt="anime & manga"
                        />{" "}
                        Back In Stock
                      </a>
                    </li>
                    <li>
                      <a href="/shop">
                        <img
                          className="nav-list-img"
                          src={Comming}
                          alt="animation and cartoons"
                        />
                        Comming Soon
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown ">
                  <Link to="./coming-soon">!Pop Yourself</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}

export default Header;
