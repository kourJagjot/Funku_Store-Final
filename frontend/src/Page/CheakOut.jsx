import React from 'react';
import Header from '../Components/common/Header';
import Footer from '../Components/common/Footer';
import { useSelector } from 'react-redux';
import pro1 from '../assests/images/Funko/product/home-product/pro-1.png';
import verf1 from '../assests/images/shop/verified.png';

const CheakOut = () => {
  const CART = useSelector((state) => state?.cart?.items);
  console.log(CART);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (CART.length === 0) {
      alert('Your cart is empty. Please add items to the cart before placing an order.');
    } else {
      // Proceed with the order placement logic
      // For example, navigate to the confirmation page
      window.location.href = 'confirmation';
    }
  };

  return (
    <div>
      <Header />

      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Checkout</h1>
                <ol className="breadcrumb">
                  <li><a href="index">Home</a></li>
                  <li className="active">checkout</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-wrapper">
        <div className="checkout shopping">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="block billing-details">
                  <h4 className="widget-title">Billing Details</h4>
                  <form className="checkout-form">
                    <div className="form-group">
                      <label htmlFor="full_name">Full Name</label>
                      <input type="text" className="form-control" id="full_name" placeholder="" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_address">Address</label>
                      <input type="text" className="form-control" id="user_address" placeholder="" />
                    </div>
                    <div className="checkout-country-code clearfix">
                      <div className="form-group">
                        <label htmlFor="user_post_code">Zip Code</label>
                        <input type="text" className="form-control" id="user_post_code" name="zipcode" value="" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="user_city">City</label>
                        <input type="text" className="form-control" id="user_city" name="city" value="" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="user_country">Country</label>
                      <input type="text" className="form-control" id="user_country" placeholder="" />
                    </div>
                  </form>
                  <button onClick={handlePlaceOrder} className="btn btn-main mt-20">Place Order</button>
                </div>
              </div>

              <div>
                {CART && CART.length > 0 ? (
                  CART.map((item, i) => (
                    <div className="col-md-4" key={i}>
                      <div className="product-checkout-details">
                        <div className="block">
                          <h4 className="widget-title">Order Summary</h4>
                          <div className="media product-card">
                            <a className="pull-left" href="product-single">
                              <img className="media-object" src={item.imagrUrl} alt="Product" />
                            </a>
                            <div className="media-body">
                              <h4 className="media-heading"><a href="product-single">{item.productName}</a></h4>
                              <p className="price">1 x ${item.price}</p>
                              <span className="remove">Remove</span>
                            </div>
                          </div>
                          <div className="discount-code">
                            <p>Have a discount? <a data-toggle="modal" data-target="#coupon-modal" href="#!">Enter it here</a></p>
                          </div>
                          <ul className="summary-prices">
                            <li>
                              <span>Subtotal:</span>
                              <span className="price">${item.price}</span>
                            </li>
                            <li>
                              <span>Shipping:</span>
                              <span>Free</span>
                            </li>
                          </ul>
                          <div className="summary-total">
                            <span>Total</span>
                            <span>${item.price}</span>
                          </div>
                          <div className="verified-icon">
                            <img src={verf1} alt="Verified" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  
                  <h2> There are no items to checkout</h2>
               
                
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="coupon-modal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <input className="form-control" type="text" placeholder="Enter Coupon Code" />
                </div>
                <button type="submit" className="btn btn-main">Apply Coupon</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheakOut;
