// src/components/Signin.js

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { loginUser, registerUser, resetAuthState } from "../store/slice/auth";

const Signin = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    role: "user"
  });
  const dispatch = useDispatch();
  const naviagte = useNavigate()
  const { status, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await dispatch(registerUser(formData));
    console.log('naviagtenaviagtenaviagte', res)
    if (res.type === "auth/registerUser/fulfilled") {
      naviagte('/login')
    }else(
      alert('please enter valid email or password')
    )
  };

  // Reset state on component unmount
  React.useEffect(() => {
    return () => {
      dispatch(resetAuthState());
    };
  }, [dispatch]);

  return (
    <div>
      <section class="signin-page account">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-md-offset-3">
              <div class="block text-center">
                <a class="logo" href="index-2.html">
                  <h2 style={{ fontWeight: "bold" }}>Funko Store</h2>
                </a>
                <h2 class="text-center">Create Your Account</h2>
                <form class="text-left clearfix" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <input
                      id="firstName"
                      name="firstName"
                      onChange={handleChange}
                      value={formData.firstName}
                      type="text"
                      class="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      id="lastName"
                      name="lastName"
                      onChange={handleChange}
                      value={formData.lastName}
                      type="text"
                      class="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      id="userName"
                      name="userName"
                      onChange={handleChange}
                      value={formData.userName}
                      type="text"
                      class="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      id="email"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      type="email"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      id="password"
                      name="password"
                      onChange={handleChange}
                      value={formData.password}
                      type="password"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="text-center">
                    <button type="submit" class="btn btn-main text-center">
                      Sign up
                    </button>
                  </div>
                </form>
                <p class="mt-20">
                  Already hava an account ?<a href="/login"> Login</a>
                </p>
                <p>
                  {/* <a href="#"> Forgot your password?</a> */}
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
