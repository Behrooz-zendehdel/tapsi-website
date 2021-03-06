import React from "react";
import logo from "../assets/tapsi.logo-removebg-preview.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>تپسی</span>
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-list">
        <ul>
          <li>
            <a href="">پشتیبانی</a>
          </li>
          <li>
            <a href="">معرفی راننده</a>
          </li>
          <li>
            <a href="">خدمات و کسب و کارها</a>
          </li>
          <li>
            <a href="">فرصت های شغلی</a>
          </li>
          <li>
            <a href="">وبلاگ</a>
          </li>
          <button>دانلود تپسی</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
