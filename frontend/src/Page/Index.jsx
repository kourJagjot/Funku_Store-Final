import React from "react";

import Product from "../assests/images/Funko/product/home-product/pro-1.png";
import Pro2 from "../assests/images/Funko/product/home-product/pro-2.png";
import Pro3 from "../assests/images/Funko/product/home-product/pro-3.png";
import Pro4 from "../assests/images/Funko/product/home-product/pro-4.png";
import Pro5 from "../assests/images/Funko/product/home-product/pro-5.png";
import Pro6 from "../assests/images/Funko/product/home-product/pro-6.png";

import ProImg from "../assests/images/shop/products/modal-product.jpg";
import Shop from "./Shop";
import NewShop from "./NewShop";
import slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };
  return (
    <div>
      <div className="hero-slider">
        {/* <div
          className="slider-item th-fullpage hero-area"
          style={{
            backgroundImage: `url(${require("./images/Funko/Funko-banner/Background1.jpg")})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  DREAMY EXCLUSIVES
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  GET YOUR SLEEP!{" "}
                </h1>
                <p>
                  {" "}
                  A Celebration is at Hand! Commemorate the 65th Anniversary of
                  Disney’s Sleeping Beauty with Funko & Loungefly Gear.
                  <a
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".8"
                    className="btn"
                    href="/shop"
                  >
                    Shop Collection
                  </a>
                </p>
              </div>
              <div className="col-lg-8 banner-img-1"></div>
            </div>
          </div>
        </div>

        <div
          className="slider-item th-fullpage hero-area"
          style={{
            backgroundImage: `url(${require("./images/Funko/Funko-banner/Background1.jpg")})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  DREAMY EXCLUSIVES
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  GET YOUR SLEEP!{" "}
                </h1>
                <p>
                  {" "}
                  A Celebration is at Hand! Commemorate the 65th Anniversary of
                  Disney’s Sleeping Beauty with Funko & Loungefly Gear.
                  <a
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".8"
                    className="btn"
                    href="/shop"
                  >
                    Shop Collection
                  </a>
                </p>
              </div>
              <div className="col-lg-8 banner-img-1"></div>
            </div>
          </div>
        </div>

        <div
          className="slider-item th-fullpage hero-area"
          style={{
            backgroundImage: `url(${require("./images/Funko/Funko-banner/Background1.jpg")})`,
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center">
                <p
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".1"
                >
                  DREAMY EXCLUSIVES
                </p>
                <h1
                  data-duration-in=".3"
                  data-animation-in="fadeInUp"
                  data-delay-in=".5"
                >
                  GET YOUR SLEEP!{" "}
                </h1>
                <p>
                  {" "}
                  A Celebration is at Hand! Commemorate the 65th Anniversary of
                  Disney’s Sleeping Beauty with Funko & Loungefly Gear.
                  <a
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".8"
                    className="btn"
                    href="/shop"
                  >
                    Shop Collection
                  </a>
                </p>
              </div>
              <div className="col-lg-8 banner-img-1"></div>
            </div>
          </div>
        </div> */}

        {/* <!-- <div className="slider-item th-fullpage hero-area" style="background-image: url(images/slider/slider-3.jpg);">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 text-left">
          <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
          <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
          <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="shop">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className="slider-item th-fullpage hero-area" style="background-image: url(images/slider/slider-2.jpg);">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 text-right">
          <p data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".1">PRODUCTS</p>
          <h1 data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".5">The beauty of nature <br> is hidden in details.</h1>
          <a data-duration-in=".3" data-animation-in="fadeInUp" data-delay-in=".8" className="btn" href="shop">Shop Now</a>
        </div>
      </div>
    </div>
  </div> --> */}
        <Slider {...settings} className="hero-slider">
          <div
            className="slider-item th-fullpage hero-area custm-cllls "
            style={{
              backgroundImage: `url(${require("./images/Funko/Funko-banner/Background1.jpg")})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <p
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".1"
                  >
                    DREAMY EXCLUSIVES
                  </p>
                  <h1
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".5"
                  >
                    GET YOUR SLEEP!
                  </h1>
                  <p>
                    A Celebration is at Hand! Commemorate the 65th Anniversary
                    of Disney’s Sleeping Beauty with Funko & Loungefly Gear.
                    <a
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      className="btn"
                      href="/shop"
                    >
                      Shop Collection
                    </a>
                  </p>
                </div>
                <div className="col-lg-8 banner-img-1"></div>
              </div>
            </div>
          </div>

          <div
            className="slider-item th-fullpage hero-area custm-cllls1"
            style={{
              backgroundImage: `url(${require("./images/Funko/Funko-banner/Background1.jpg")})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <p
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".1"
                  >
                    ANIME ANTICS
                  </p>
                  <h1
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".5"
                  >
                    POW! WHOOSH! POP!
                  </h1>
                  <p>
                    Funime Season is Breezing in. Kick it Off with New Anime
                    Pops!
                    <br />
                    <a
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      className="btn"
                      href="/shop"
                    >
                      Shop Collection
                    </a>
                  </p>
                </div>
                <div className="col-lg-8 banner-img-1"></div>
              </div>
            </div>
          </div>

          <div
            className="slider-item th-fullpage hero-area"
            style={{
              backgroundImage: `url(${require("./images/Funko/Funko-banner/Background1.jpg")})`,
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-4 text-center">
                  <p
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".1"
                  >
                    NBA EXCLUSIVES
                  </p>
                  <h1
                    data-duration-in=".3"
                    data-animation-in="fadeInUp"
                    data-delay-in=".5"
                  >
                    NOTHING BUT NET
                  </h1>
                  <p>
                    The Ball is in Your Court! Get NBA Pop! Covers, 2-Packs, and
                    Exclusives for Your Display.
                    <a
                      data-duration-in=".3"
                      data-animation-in="fadeInUp"
                      data-delay-in=".8"
                      className="btn"
                      href="/shop"
                    >
                      Shop Collection
                    </a>
                  </p>
                </div>
                <div className="col-lg-8 banner-img-1"></div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      <section className="products section bg-gray">
        <div className="container">
          <div className="row">
            <div className="title text-center custom-text-add">
              <h2>New Collection for You</h2>
            </div>
          </div>
          <div className="row">
            <NewShop />
            {/* <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">Exclisive</span>
                  <img
                    className="img-responsive"
                    src={Product}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <p>NBA</p>
                  <h4>
                    <a href="product-single">
                      Pop! Wilt Chamberlain (1962 Warriors)
                    </a>
                  </h4>
                  <p className="price">$15.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">Exclisive</span>
                  <img
                    className="img-responsive"
                    src={Pro2}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <p>THE LORD OF THE RINGS</p>
                  <h4>
                    <a href="product-single">
                      Pop! Wilt Chamberlain (1962 Warriors)
                    </a>
                  </h4>
                  <p className="price">$15.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">New</span>
                  <img
                    className="img-responsive"
                    src={Pro3}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <p>THE LORD OF THE RINGS</p>
                  <h4>
                    <a href="product-single">POP! THÉODEN</a>
                  </h4>
                  <p className="price">$30.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">New</span>
                  <img
                    className="img-responsive"
                    src={Pro4}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <p>TRIGUN</p>
                  <h4>
                    <a href="product-single">
                      POP! DELUXE VASH WITH ANGEL ARM (GLOW)
                    </a>
                  </h4>
                  <p className="price">$30.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">New</span>
                  <img
                    className="img-responsive"
                    src={Pro5}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <p>HOW TO TRAIN YOUR DRAGON</p>
                  <h4>
                    <a href="product-single">POP! LIGHT FURY</a>
                  </h4>
                  <p className="price">$12.00</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">New</span>
                  <img
                    className="img-responsive"
                    src={Pro6}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search-strong"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#!">
                          <i className="tf-ion-ios-heart"></i>
                        </a>
                      </li>
                      <li>
                        <a href="cart">
                          <i className="tf-ion-android-cart"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-content">
                  <p>HARRY POTTER</p>
                  <h4>
                    <a href="product-single">
                      POP! HARRY POTTER ON NIMBUS 2000
                    </a>
                  </h4>
                  <p className="price">$36.00</p>
                </div>
              </div>
            </div> */}

            {/* <!-- Modal --> */}
            <div className="modal product-modal fade" id="product-modal">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <i className="tf-ion-close"></i>
              </button>
              <div className="modal-dialog " role="document">
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="row">
                      <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="modal-image">
                          <img
                            className="img-responsive"
                            src={ProImg}
                            alt="product-img"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-6 col-xs-12">
                        <div className="product-short-details">
                          <h2 className="product-title">
                            GM Pendant, Basalt Grey
                          </h2>
                          <p className="product-price">$200</p>
                          <p className="product-short-description">
                            Discover the latest trends at Funkoo Store! From
                            stylish apparel to must-have accessories, we've got
                            everything to keep you fashion-forward. Join our
                            community for exclusive offers and updates!
                          </p>
                          <a href="cart" className="btn btn-main">
                            Add To Cart
                          </a>
                          <a
                            href="product-single"
                            className="btn btn-transparent"
                          >
                            View Product Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- /.modal --> */}
          </div>
        </div>
      </section>

      {/* new section */}

      <div
        className="slider-item th-fullpage hero-area"
        style={{
          backgroundImage: `url(${require("../assests/images/Funko/Funko-banner/newsecbg.jpg")})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 text-center">
              <p
                data-duration-in=".3"
                data-animation-in="fadeInUp"
                data-delay-in=".1"
              >
                FUNKO FANDOM!
              </p>
              <h1
                data-duration-in=".3"
                data-animation-in="fadeInUp"
                data-delay-in=".5"
              >
                POP! GON FREECSS (FISHING){" "}
              </h1>
              <p>
                {" "}
                Complete Your Hunter X Hunter Set by Reeling in This Exclusive,
                Fishing Pop! Gon Freecss to Your Collection.
                <br />
                <a href="/shop">
                  <button type="button" class="btn btn-outline-warning">
                    Shop Collection
                  </button>
                </a>
              </p>
            </div>
            <div className="col-lg-4 banner-img-2"></div>
          </div>
        </div>
      </div>

      {/* <!--
Start Call To Action

==================================== --> */}

      <section className="call-to-action bg-gray section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="title">
                <h1>SUBSCRIBE TO NEWSLETTER</h1>
                <p>
                  Discover the latest trends at Funkoo Store!
                  <br />
                  From stylish apparel to must-have accessories, we've got
                  everything to keep you fashion-forward.
                  <br />
                  Join our community for exclusive offers and updates!
                  <br />
                </p>
              </div>
              <div className="col-lg-6 col-md-offset-3">
                <div className="input-group subscription-form">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-main" type="button">
                      Subscribe Now!
                    </button>
                  </span>
                </div>
                {/* <!-- /input-group --> */}
              </div>
              {/* <!-- /.col-lg-6 --> */}
            </div>
          </div>
          {/* <!-- End row --> */}
        </div>
        {/* <!-- End container --> */}
      </section>
      {/* <!-- End section --> */}

      {/* <section className="section instagram-feed">
        <div className="container">
          <div className="row">
            <div className="title">
              <h2>View us on instagram</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="instagram-slider"
                id="instafeed"
                data-accessToken="IGQVJYeUk4YWNIY1h4OWZANeS1wRHZARdjJ5QmdueXN2RFR6NF9iYUtfcGp1NmpxZA3RTbnU1MXpDNVBHTzZAMOFlxcGlkVHBKdjhqSnUybERhNWdQSE5hVmtXT013MEhOQVJJRGJBRURn"
              ></div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Index;
