import React from "react";
import shoping from "../assets/products/shopping-cart.png";

const Navbar = () => {
  return (
    <div className="navbar max-w-6xl mx-auto">
      <div className="navbar-start">
        <div>
          <h2 className="text-3xl font-bold text-indigo-600/100 dark:text-indigo-400/100">DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div>
          <img className="w-6 h-6" src={shoping} />
        </div>
        <button>Login</button>
        <a className="btn rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
