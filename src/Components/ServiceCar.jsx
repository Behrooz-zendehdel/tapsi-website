import React from "react";
import cars from "../db/data";
const ServiceCar = () => {
  return (
    <div className="services">
      <h1>سرویس های تپسی</h1>

      <div className="line">
        {cars.map((c) => (
          <ul className="serviceline">
            <img src={c.image} alt="" />
            <li>
              <a> {c.name}</a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ServiceCar;
