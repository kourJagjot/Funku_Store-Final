// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Footer from "../Components/common/Footer";
// import Header from "../Components/common/Header";
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../store/slice/cartSlice";
// import shop from "../assests/images/shop/products/product-1.jpg";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Shop() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5555/api/product/getAllProduct")
//       .then((response) => {
//         setProducts(response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error fetching the products!", error);
//       });
//   }, []);

//   const dispatch = useDispatch();

//   const handleAddCart = (product) => {
//     dispatch(addToCart(product));
//   };

//   return (
//     <div>
//       <Header />
//       <section className="page-header">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="content">
//                 <h1 className="page-name">Shop</h1>
//                 <ol className="breadcrumb">
//                   <li>
//                     <a href="index">Home</a>
//                   </li>
//                   <li className="active">shop</li>
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="products section">
//         <div className="container">
//           <div className="row">
//             {products.map((product, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="product-item">
//                   <div className="product-thumb">
//                     <span className="bage">
//                       {/* {product.isExclusive
//                         ? "Exclusive"
//                         : product.isNew
//                         ? "New"
//                         : ""} */}
//                       New
//                     </span>
//                     <img
//                       className="img-responsive"
//                       src={product.imagrUrl ? product.imagrUrl : shop}
//                       alt="product-img"
//                     />
//                     <div className="preview-meta">
//                       <ul>
//                         <li>
//                           <span
//                             data-toggle="modal"
//                             data-target="#product-modal"
//                           >
//                             <i className="tf-ion-ios-search-strong"></i>
//                           </span>
//                         </li>
//                         <li>
//                           <a href="#!">
//                             <i className="tf-ion-ios-heart"></i>
//                           </a>
//                         </li>
//                         <li>
//                           <Link onClick={() => handleAddCart(product)}>
//                             <i className="tf-ion-android-cart"></i>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div className="product-content">
//                     <p>{product.Category}</p>
//                     <h4>
//                       {/* <a href="product-single">{product.productName}</a> */}
//                       <Link to={`/product-single/${product._id}`}>
//                         {product.productName}
//                       </Link>
//                     </h4>
//                     <p className="price">${product.price}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Modal */}
//           <div className="modal product-modal fade" id="product-modal">
//             <button
//               type="button"
//               className="close"
//               data-dismiss="modal"
//               aria-label="Close"
//             >
//               <i className="tf-ion-close"></i>
//             </button>
//             <div className="modal-dialog" role="document">
//               <div className="modal-content">
//                 <div className="modal-body">
//                   <div className="row">
//                     <div className="col-md-8 col-sm-6 col-xs-12">
//                       <div className="modal-image">
//                         <img
//                           className="img-responsive"
//                           src={shop}
//                           alt="product-img"
//                         />
//                       </div>
//                     </div>
//                     <div className="col-md-4 col-sm-6 col-xs-12">
//                       <div className="product-short-details">
//                         <h2 className="product-title">
//                           GM Pendant, Basalt Grey
//                         </h2>
//                         <p className="product-price">$200</p>
//                         <p className="product-short-description">
//                           Lorem ipsum dolor sit amet, consectetur adipisicing
//                           elit. Rem iusto nihil cum. Illo laborum numquam rem
//                           aut officia dicta cumque.
//                         </p>
//                         <a href="cart" className="btn btn-main">
//                           Add To Cart
//                         </a>
//                         <a
//                           href="product-single"
//                           className="btn btn-transparent"
//                         >
//                           View Product Details
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* /.modal */}
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

// export default Shop;
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../Components/common/Footer";
import Header from "../Components/common/Header";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slice/cartSlice";
import shop from "../assests/images/shop/products/product-1.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [ModalProduct, setModalProduct] = useState(null)
  console.log(ModalProduct)

  useEffect(() => {
    axios
      .get("http://localhost:5555/api/product/getAllProduct")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Item successfully added to cart!");
  };

  return (
    <div>
      <Header />
      <ToastContainer />
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content">
                <h1 className="page-name">Shop</h1>
                <ol className="breadcrumb">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li className="active">shop</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products section">
        <div className="container">
          <div className="row">
            {products.map((product, index) => (
              <div className="col-md-4" key={index}>
                <div className="product-item">
                  <div className="product-thumb">
                    <span className="bage">New</span>
                    <img
                      className="img-responsive"
                      src={product.imagrUrl ? product.imagrUrl : shop}
                      alt="product-img"
                    />
                    <div className="preview-meta">
                      <ul>
                        <li>
                          <span
                            data-toggle="modal"
                            data-target="#product-modal"
                            onClick={() => setModalProduct(product)}
                          >
                            <i className="tf-ion-ios-search-strong"></i>
                          </span>
                        </li>
                        <li>
                          <a href="#!">
                            <i className="tf-ion-ios-heart"></i>
                          </a>
                        </li>
                        <li>
                          <Link onClick={() => handleAddCart(product)}>
                            <i className="tf-ion-android-cart"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-content">
                    <p>{product.Category}</p>
                    <h4>
                      <Link to={`/product-single/${product._id}`}>
                        {product.productName}
                      </Link>
                    </h4>
                    <p className="price">${product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          <div className="modal product-modal fade" id="product-modal">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i className="tf-ion-close"></i>
            </button>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                      <div className="modal-image">
                        <img
                          className="img-responsive"
                          src={ModalProduct?.imagrUrl ? ModalProduct?.imagrUrl : shop}
                          alt="product-img"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="product-short-details">
                        <h2 className="product-title">
                          {ModalProduct?.productName}
                        </h2>
                        <p className="product-price">$ {ModalProduct?.price}</p>
                        <p className="product-short-description">
                          {ModalProduct?.desc}
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
          {/* /.modal */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Shop;
