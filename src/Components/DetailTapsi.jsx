import React from "react";
import { AiOutlineLeft } from "react-icons/ai";
import bizines from "../assets/tapis.bizines.webp";
const DetailTapsi = () => {
  return (
    <div className="detail">
      <div className="detail-right">
        <h1>خدمات تپسی ویژه کسب و کارها</h1>
        <p>
          پنل سازمانی تپسی، یک سامانه تحت وب است که به سادگی امکان درخواست
          هم‌زمان تعداد نامحدودی خودرو و پیک را برای کسب‌وکارها و سازمان‌ها
          فراهم می‌کند. و با استفاده از آن می‌توانید ماموریت های درون‌شهری و
          ارسال کالاهای خود را به سادگی مدیریت کنید.
        </p>
        <span>
          اطلاعات بیشتر سرویس سازمانی
          <AiOutlineLeft />
        </span>
        <button>ورود و ثبت نام سازمانی</button>
      </div>
      <div className="detail-left">
        <img src={bizines} alt="" />
      </div>
    </div>
  );
};

export default DetailTapsi;
