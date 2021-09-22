import React from 'react';
import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <a href="">Product</a>
        <a href="">Company</a>
        <a href="">Connect</a>
      </div>
      <div className="navbar-right">
        <button>Login</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
