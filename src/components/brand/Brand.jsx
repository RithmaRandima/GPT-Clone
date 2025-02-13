import React from "react";
import "./Brand.css";
import brand01 from "../../assets/brand-01.png";
import brand02 from "../../assets/brand-02.png";
import brand03 from "../../assets/brand-03.png";
import brand04 from "../../assets/brand-04.png";
import brand05 from "../../assets/brand-05.png";

const Brand = () => {
  return (
    <div className="brand section__padding ">
      <div>
        <img src={brand01} alt="" />
      </div>
      <div>
        <img src={brand02} alt="" />
      </div>
      <div>
        <img src={brand03} alt="" />
      </div>
      <div>
        <img src={brand04} alt="" />
      </div>
      <div>
        <img src={brand05} alt="" />
      </div>
    </div>
  );
};

export default Brand;
