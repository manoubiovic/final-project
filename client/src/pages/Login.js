import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin, userRegister } from "../redux/userSlice/userSlice";
//  import { Input } from "reactstrap";
import "../style/login.css";

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [newUserRegister, setNewUserRegister] = useState({});
  const [newUserLogin, setNewUserLogin] = useState({});
  const handleChange = (e) => {
    setNewUserRegister({ ...newUserRegister, [e.target.name]: e.target.value });
  };
  const handleChangeLogin = (e) => {
    setNewUserLogin({
      ...newUserLogin,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="login-page">
      <title>Slide Navbar</title>
      <link rel="stylesheet" type="text/css" href="slide navbar style.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="login-page-main">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <div className="form_login">
            <label htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="name"
              placeholder="User name"
              required
              onChange={handleChange}
            />
            <input
              placeholder="Enter your last name"
              name="lastName"
              type="text"
              onChange={handleChange}
            />
            <input
              name="phone"
              placeholder="Enter your phone number"
              type="number"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChange}
            />
            <button onClick={() => {dispatch(userRegister(newUserRegister));navigate("/")}
            }>
              Sign up
            </button>
          </div>
        </div>
        <div className="login_bloc">
          <div>
            <label htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={handleChangeLogin}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleChangeLogin}
            />
            <button onClick={() => {
              dispatch(userLogin(newUserLogin));
               setTimeout(() => {
                navigate("/")
              }, 400);
              setTimeout(() => {
                window.location.reload();
              }, 400)
            }}>;

              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
