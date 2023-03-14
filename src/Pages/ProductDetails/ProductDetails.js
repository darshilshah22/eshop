import React from "react";
import DeliveryPackage from "../../components/DeliveryPackage/DeliveryPackage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import Description from "../../components/Description/Description";
import "./productDetails.css";
import ProductReview from "../../components/ProductReview/ProductReview";

const ProductDetails = () => {
  return (
    <>
      <div className="row w-100">
        <div className="col-xl ms-4 my-4">
          <img
            src="../assets/productDetails/laptop.png"
            alt=""
            className="w-100"
          />
          <div className="row mt-4">
            <div className="col-sm">
              <img
                src="../assets/productDetails/laptop1.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-sm">
              <img
                src="../assets/productDetails/laptop2.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-sm">
              <img
                src="../assets/productDetails/laptop3.png"
                alt=""
                className="w-100"
              />
            </div>
          </div>
        </div>
        <div className="col-xl-5 my-3 mx-3">
          <ProductInfo />
        </div>
        <div className="col-xl">
          <DeliveryPackage />
        </div>
      </div>
      <Description />
      <ProductReview />
    </>
  );
};

export default ProductDetails;