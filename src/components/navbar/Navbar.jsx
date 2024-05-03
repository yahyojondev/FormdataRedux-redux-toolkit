import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-md.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <img className="navbar__logo" src={logo} alt="" />
          <div className="navLink__wrapper">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/product"}>Product</NavLink>
            <NavLink to={"/admin"}>Admin</NavLink>
            <NavLink to={"/sign-up"}>SignUp</NavLink>
            <NavLink to={"/users"}>Users</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
