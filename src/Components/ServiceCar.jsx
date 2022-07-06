import React, { useState } from "react";
import cars from "../db/data";
const ServiceCar = () => {
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);

  const LoadHandler = () => {
    setLoad(true);
    setShow(true);
  };

  return (
    <>
      <div className="services">
        <h1>سرویس های تپسی</h1>

        <div className="line">
          {cars.map((c) => (
            <ul className="serviceline" onClick={LoadHandler}>
              <img src={c.image} alt="" />
              <li>
                <span>{c.name}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="border">
      </div>
    </>
  );
};

export default ServiceCar;
