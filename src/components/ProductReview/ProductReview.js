import React from "react";
import "./productReview.css";

const ProductReview = () => {
  return (
    <div className="container ms-3">
      <p className="m-0 fw-semibold fs-5">Product Review</p>
      <div class="progress blue">
        <span class="progress-left">
          <span class="progress-bar"></span>
        </span>
        <span class="progress-right">
          <span class="progress-bar"></span>
        </span>
        <div class="progress-value">50%</div>
      </div>
    </div>
  );
};

export default ProductReview;
