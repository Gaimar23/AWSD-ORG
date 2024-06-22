import React from "react";
import "./Navbar.scss";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={assets.logo2} alt="" className="logo" />
      <img src={assets.userProfil} alt="" className="profile" />
    </div>
  );
};

export default Navbar;
