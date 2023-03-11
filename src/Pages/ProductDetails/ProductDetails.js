import React from "react";
import DeliveryPackage from "../../components/DeliveryPackage/DeliveryPackage";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import "./productDetails.css";

const ProductDetails = () => {
  return (
    <div className="row w-100">
      <div className="col mx-4 my-5">
        <img src="../assets/productDetails/laptop.png" alt="" className="w-100" />
        <div className="row mt-4">
          <div className="col-sm">
            <img src="../assets/productDetails/laptop1.png" alt="" className="w-100"/>
          </div>
          <div className="col-sm">
            <img src="../assets/productDetails/laptop2.png" alt="" className="w-100"/>
          </div>
          <div className="col-sm">
            <img src="../assets/productDetails/laptop3.png" alt="" className="w-100"/>
          </div>
        </div>
      </div>
      <div className="col my-5">
        <ProductInfo />
      </div>
      <div className="col">
        <DeliveryPackage />
      </div>
    </div>
  );
};

export default ProductDetails;

{/* <div className="pd">
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
      <ProductInfo />
      <DeliveryPackage />
    </div> */}