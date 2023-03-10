import React from "react";
import "./productDetails.css";

const ProductDetails = () => {
  return (
    <div className="pd">
      <div className="pd_img">
        <div className="pd_big-img">
          <img src="../assets/productDetails/laptop.png" alt="" />
        </div>
        <div className="pd_small-img">
          <img src="../assets/productDetails/laptop1.png" alt="" />
          <img src="../assets/productDetails/laptop2.png" alt="" />
          <img src="../assets/productDetails/laptop3.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
