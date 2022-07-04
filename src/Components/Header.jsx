import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { SiPwa } from "react-icons/si";
import { AiOutlineCar } from "react-icons/ai";
import mobile from "../assets/mobile.tapsi.webp";

const Header = () => {
  return (
    <div className="header">
      <div className="right">
        <h1>تپسی</h1>
        <h4>اپلیکیشن درخواست خودرو و پیک</h4>
        <div className="list-button">
          <button className="btn top">
            <AiOutlineArrowDown />
            دانلود اپلیکیشن مسافران
          </button>
          <button className="btn top">
            <SiPwa />
            وب اپلیکیشن مسافران
          </button>

          <button className="btn  bottom">
            <AiOutlineArrowDown />
            دانلود اپلیکیشن رانندگان
          </button>
          <button className="btn bottom">
            <AiOutlineCar />
              ثبت نام راننده
          </button>
        </div>
      </div>
      <div className="left">
        <img src={mobile} alt="mobile" />
      </div>
    </div>
  );
};

export default Header;
