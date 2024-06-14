import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./Page/Home";
import Index from "./Page/Index";
import Login from "./LoginPage/Login";
import Singin from "./Page/Singin";
import ForgetPassword from "./Page/ForgetPassword";
import Cart from "./Page/Cart";
import Product from "./Page/Product";
import Contact from "./Page/Contact";
import Confirmation from "./Page/Confirmation";
import Coming from "./Page/Coming";
import CheckOut from "./Page/CheakOut";
import Shop from "./Page/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Switch>
          <Route path="/" exact component={Shop} />
          <Route path="/product/:id" component={Product} />
        </Switch> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Singin />} />
          <Route path="/Forget-Password" element={<ForgetPassword />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product-single/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/coming" element={<Coming />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
