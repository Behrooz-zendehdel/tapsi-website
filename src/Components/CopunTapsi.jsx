import React from "react";
import copunimg from "../assets/tapsi.code.webp";
const CopunTapsi = () => {
  return (
    <div className="copun">
      <div className="c-right">
        <img src={copunimg} alt="" />
      </div>
      <div className="c-left">
        <h1>خدمات تپسی ویژه کسب و کارها</h1>
        <p>
          کاربران، کسب‌وکارها و سازمان‌ها می‌توانند به تعداد و مبلغ مورد نظرشان،
          کد اعتبار یا کد تخفیف تپسی تهیه کرده، برای خود، پرسنل و یا مشتریانشان
          استفاده کنند و از تخفیف‌های ویژه تپسی نیز بهره‌مند شوند. این کدها
          امکان سفارشی‌سازی بر اساس مبدا، مقصد، زمان، درصد و مبلغ را دارند.ارسال
          کالاهای خود را به سادگی مدیریت کنید.
        </p>
        <button>خرید کد اعتبار و تخفیف</button>
      </div>
    </div>
  );
};

export default CopunTapsi;
