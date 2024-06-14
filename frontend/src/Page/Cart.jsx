import React from "react";

import cart from "../assests/images/Funko/product/home-product/pro-1.png";
import cart1 from "../assests/images/Funko/product/home-product/pro-2.png";
import cart2 from "../assests/images/Funko/product/home-product/pro-3.png";
import Header from "../Components/common/Header";
import Footer from "../Components/common/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const CART = useSelector((state) => state?.cart?.items);
  console.log(CART);

  const handleRemoveItem = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div>
      <Header />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Cart</h1>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">cart</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-wrapper">
        <div className="cart shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="block">
                  <div className="product-list">
                    <form method="post">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="">Item Name</th>
                            <th className="">Item Price</th>
                            <th className="">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {CART &&
                            CART.map((item, i) => (
                              <tr className="" key={i}>
                                <td className="">
                                  <div className="product-info">
                                    <img
                                      width="80"
                                      src={item?.imagrUrl || cart}
                                      alt=""
                                    />
                                    <a href="#!">{item?.productName}</a>
                                  </div>
                                </td>
                                <td className="">${item?.price}</td>
                                <td className="">
                                  <a
                                    className="product-remove"
                                    href="#!"
                                    onClick={() => handleRemoveItem(item)}
                                  >
                                    Remove
                                  </a>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                      <a href="checkout" className="btn btn-main pull-right">
                        Checkout
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
