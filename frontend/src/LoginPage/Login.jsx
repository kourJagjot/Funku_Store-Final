import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, resetAuthState } from "../store/slice/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "johndoe121@example.com",
    password: "hashedPassword",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLogin = useSelector((state) => state.auth);
  console.log("status", isLogin);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultAction = await dispatch(loginUser(formData));
    console.log("resultAction", resultAction);
    if (loginUser.fulfilled.match(resultAction)) {
      navigate("/");
    } else {
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

  // Reset state on component unmount
  React.useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  return (
    <div>
      <section className="signin-page account">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="block text-center">
                <a className="logo" href="index-2">
                  <h2 style={{ fontWeight: "bold" }}>Funko Store</h2>
                </a>
                <h2 className="text-center">Sign In to Your Account</h2>
                <form className="text-left clearfix" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-main text-center">
                      Sign In
                    </button>
                  </div>
                </form>
                {/* {status === 'loading' && <p>Loading...</p>}
                {status === 'failed' && <p>Error: {error}</p>}
                {status === 'succeeded' && <p>Login successful!</p>} */}
                <p className="mt-20">
                  Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
                <p>
                  <Link to="/Forget-Password">Forgot your password?</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
