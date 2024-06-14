import React, { useEffect, useState } from "react";

import pro1 from "../assests/images/Funko/product/home-product/pro-1.png";
import pro2 from "../assests/images/Funko/product/home-product/pro-2.png";
import pro3 from "../assests/images/Funko/product/home-product/pro-3.png";
import pro4 from "../assests/images/Funko/product/home-product/pro-4.png";
import pro5 from "../assests/images/Funko/product/home-product/pro-5.png";
import pro6 from "../assests/images/Funko/product/home-product/pro-6.png";

import Jonathon from "../assests/images/blog/avater-4.jpg";
import Jonathon1 from "../assests/images/blog/avater-1.jpg";
import Jonathon2 from "../assests/images/blog/avater-1.jpg";

import shop from "../assests/images/shop/products/modal-product.jpg";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";
import {
  Navigate,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import { toast } from "react-toastify";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    axios
      .get("http://localhost:5555/api/product/getAllProduct")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);
  const filterProduct =
    (products && products.find((item) => item._id === id)) || {};
  const handleAddCart = () => {
    dispatch(addToCart(filterProduct));
    toast.success("Item successfully added to cart!");
    Navigate("/cart");
  };
  console.log("testing", filterProduct);
  return (
    <div>
      <Header />
      <section className="single-product">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ol className="breadcrumb">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li className="#">Single Product</li>
              </ol>
            </div>
          </div>
          <div className="row mt-20">
            <div className="col-md-5">
              <div className="single-product-slider">
                <div
                  id="carousel-custom"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-outer">
                    {/* <!-- me art lab slider --> */}
                    <div className="carousel-inner ">
                      {[...Array(6)].map((_, index) => (
                        <div
                          key={index}
                          className={`item ${index === 0 ? "active" : ""}`}
                        >
                          <img
                            src={
                              filterProduct?.imagrUrl
                                ? filterProduct?.imagrUrl
                                : pro2
                            }
                            alt=""
                            data-zoom-image="./images/Funko/product/home-product/pro-2.png"
                          />
                        </div>
                      ))}
                    </div>

                    {/* <!-- sag sol --> */}
                    <a
                      className="left carousel-control"
                      href="#carousel-custom"
                      data-slide="prev"
                    >
                      <i className="tf-ion-ios-arrow-left"></i>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#carousel-custom"
                      data-slide="next"
                    >
                      <i className="tf-ion-ios-arrow-right"></i>
                    </a>
                  </div>

                  {/* <!-- thumb --> */}
                  <ol className="carousel-indicators mCustomScrollbar meartlab">
                    {[...Array(6)].map((_, index) => (
                      <li
                        key={index}
                        data-target="#carousel-custom"
                        data-slide-to={index}
                        className={index === 0 ? "active" : ""}
                      >
                        <img
                          src={
                            filterProduct?.imagrUrl
                              ? filterProduct?.imagrUrl
                              : pro2
                          }
                          alt=""
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="single-product-details">
                <p>{filterProduct?.Category}</p>
                <h2>{filterProduct?.productName}</h2>
                <p className="product-price">{filterProduct?.price}</p>

                <p className="product-description mt-20">
                  {filterProduct?.desc}
                </p>
                <p>
                  Exclusives sold within the U.S. maybe available in other
                  territories with select partners.
                </p>
                <div className="color-swatches">
                  <span>Item Number:</span>
                  <ul>
                    <li>75702</li>
                  </ul>
                </div>
                <div className="product-size">
                  <span>Category:</span>
                  <ul>
                    <li>Movies & TV</li>
                  </ul>
                </div>
                <div className="product-quantity">
                  <span>License:</span>
                  <ul>
                    <li>The Lord of the Rings</li>
                  </ul>
                </div>
                <div className="product-category">
                  <span>Product Type:</span>
                  <ul>
                    <li>Pop!</li>
                  </ul>
                </div>
                <a
                  href=""
                  onClick={handleAddCart}
                  className="btn btn-main mt-20"
                >
                  Add To Cart
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="tabCommon mt-20">
                <ul className="nav nav-tabs">
                  <li className="active">
                    <a data-toggle="tab" href="#details" aria-expanded="true">
                      Details
                    </a>
                  </li>
                  <li className="">
                    <a data-toggle="tab" href="#reviews" aria-expanded="false">
                      Reviews (3)
                    </a>
                  </li>
                </ul>
                <div className="tab-content patternbg">
                  <div id="details" className="tab-pane fade active in">
                    <h4>Product Description</h4>
                    <p>
                      Spread your wings and welcome a new Pop! member to the
                      Batman™ Family. Funko Pop! Batwing™ emerges from the
                      shadows of Gotham City to serve as a vigilante of justice
                      in your Batman War Zone collection. He’s wearing his
                      specially designed suit and is ready for action. Bring him
                      home today. Vinyl figure is approximately 3.99 inches
                      tall.
                    </p>
                    <p></p>
                  </div>
                  <div id="reviews" className="tab-pane fade">
                    <div className="post-comments">
                      <ul className="media-list comments-list m-bot-50 clearlist">
                        {/* <!-- Comment Item start--> */}
                        <li className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar"
                              src={Jonathon1}
                              alt=""
                              width="50"
                              height="50"
                            />
                          </a>

                          <div className="media-body">
                            <div className="comment-info">
                              <h4 className="comment-author">
                                <a href="#!">Jonathon Andrew</a>
                              </h4>
                              <time datetime="2013-04-06T13:53">
                                July 02, 2015, at 11:34
                              </time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles"></i>Reply
                              </a>
                            </div>

                            <p>
                              Spread your wings and welcome a new Pop! member to
                              the Batman™ Family. Funko Pop! Batwing™ emerges
                              from the shadows of Gotham City to serve as a
                              vigilante of justice in your Batman War Zone
                              collection. He’s wearing his specially designed
                              suit and is ready for action. Bring him home
                              today. Vinyl figure is approximately 3.99 inches
                              tall.
                            </p>
                          </div>
                        </li>
                        {/* <!-- End Comment Item -->

								    <!-- Comment Item start--> */}
                        <li className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar"
                              src={Jonathon}
                              alt=""
                              width="50"
                              height="50"
                            />
                          </a>

                          <div className="media-body">
                            <div className="comment-info">
                              <div className="comment-author">
                                <a href="#!">Jonathon Andrew</a>
                              </div>
                              <time datetime="2013-04-06T13:53">
                                July 02, 2015, at 11:34
                              </time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles"></i>Reply
                              </a>
                            </div>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque at magna ut ante eleifend eleifend.
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Magni natus, nostrum iste non
                              delectus atque ab a accusantium optio, dolor!
                            </p>
                          </div>
                        </li>
                        {/* <!-- End Comment Item --> */}

                        {/* <!-- Comment Item start--> */}
                        <li className="media">
                          <a className="pull-left" href="#!">
                            <img
                              className="media-object comment-avatar"
                              src={Jonathon2}
                              alt=""
                              width="50"
                              height="50"
                            />
                          </a>

                          <div className="media-body">
                            <div className="comment-info">
                              <div className="comment-author">
                                <a href="#!">Jonathon Andrew</a>
                              </div>
                              <time datetime="2013-04-06T13:53">
                                July 02, 2015, at 11:34
                              </time>
                              <a className="comment-button" href="#!">
                                <i className="tf-ion-chatbubbles"></i>Reply
                              </a>
                            </div>

                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Quisque at magna ut ante eleifend eleifend.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="products related-products section">
        <div className="container">
          <div className="row">
            <div className="title text-center">
              <h2>Related Products</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="product-item">
                <div className="product-thumb">
                  <span className="bage">Sale</span>
                  <img
                    className="img-responsive"
                    src={pro1}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#">
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
                      POP! WILT CHAMBERLAIN (1962 WARRIORS)
                    </a>
                  </h4>
                  <p className="price">$30.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-item">
                <div className="product-thumb">
                  <img
                    className="img-responsive"
                    src={pro2}
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
                        <a href="#">
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
                  <p className="price">$15.00</p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="product-item">
                <div className="product-thumb">
                  <img
                    className="img-responsive"
                    src={pro3}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#">
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
            <div className="col-md-3">
              <div className="product-item">
                <div className="product-thumb">
                  <img
                    className="img-responsive"
                    src={pro4}
                    alt="product-img"
                  />
                  <div className="preview-meta">
                    <ul>
                      <li>
                        <span data-toggle="modal" data-target="#product-modal">
                          <i className="tf-ion-ios-search"></i>
                        </span>
                      </li>
                      <li>
                        <a href="#">
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
                  <p className="price">$20.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Modal --> */}
      {/* <div className="modal product-modal fade" id="product-modal">
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
                <div className="col-md-8">
                  <div className="modal-image">
                    <img className="img-responsive" src={shop} />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="product-short-details">
                    <h2 className="product-title">GM Pendant, Basalt Grey</h2>
                    <p className="product-price">$200</p>
                    <p className="product-short-description">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Rem iusto nihil cum. Illo laborum numquam rem aut officia
                      dicta cumque.
                    </p>
                    <a href="#!" className="btn btn-main">
                      Add To Cart
                    </a>
                    <a href="#!" className="btn btn-transparent">
                      View Product Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Product;
