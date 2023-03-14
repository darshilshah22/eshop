import React from "react";
// import "./productInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductInfo = () => {
  return (
    <div className="conatiner">
      <p className="fw-semibold fs-4 m-0">
        Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS
        Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office
        2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg), 82FG01B5IN
      </p>
      <section className="d-flex align-items-center mt-2">
        <img src="../assets/productDetails/ratings.png" alt="" />
        <p className="m-0 ms-2 p-0">(4.7) - 81 ratings</p>
      </section>
      <section>
        <h2 className="mt-3 fw-bold">₹59,490</h2>
        <p className="m-0 text-secondary mt-1">Inclusive of all taxes</p>
        <p className="m-0 text-secondary">
          EMI starts at ₹2,842. No Cost EMI available EMI options
        </p>
      </section>
      <div className="d-flex align-items-center border-top mt-3">
        <p className="m-0 p-0 me-auto">Choose Color</p>
        <div className="d-flex gap-2">
          <p className="border rounded px-3 py-1 my-4">Black</p>
          <p className="border rounded px-3 py-1 my-4">Gray</p>
          <p className="border rounded px-3 py-1 my-4">White</p>
          <p className="border rounded px-3 py-1 my-4">Red</p>
        </div>
      </div>
      <div className="d-flex align-items-center border-top border-bottom">
        <p className="m-0 p-0 me-auto">Memory (RAM)</p>
        <div className="d-flex gap-2">
          <p className="border rounded px-3 py-1 my-4">4GB</p>
          <p className="border rounded px-3 py-1 my-4">8GB</p>
          <p className="border rounded px-3 py-1 my-4">12GB</p>
          <p className="border rounded px-3 py-1 my-4">16GB</p>
        </div>
      </div>
      <div className="d-flex align-items-center border-bottom">
        <p className="m-0 p-0 me-auto">Quantity</p>
        <div className="d-flex gap-3 my-4 align-items-center">
          <FontAwesomeIcon
            icon={faPlus}
            style={{ backgroundColor: "#DEDEDE", padding: "5px" }}
          />
          <p className="m-0 p-0">1</p>
          <FontAwesomeIcon
            icon={faMinus}
            style={{ backgroundColor: "#DEDEDE", padding: "5px" }}
          />
        </div>
      </div>
      <section className="d-flex mt-3 gap-3">
        <button
          type="button"
          className="btn text-light w-100 p-3"
          style={{ background: "#52057B" }}
        >
          Buy Now
        </button>
        <button
          type="button"
          className="btn d-flex text-dark w-100 border-dark rounded-2 justify-content-center gap-1 m-0 p-3"
        >
          <img src="../assets/productDetails/cart.svg" alt="" /> Add to cart
        </button>
      </section>
      <div class="container mt-3 p-0" style={{borderBottom: "1px solid #E2E2E2", margin: "0"}}>
            <div class="row gy-1 mt-3">
                <div class="col-6 mb-3"><img src="../assets/productDetails/original.png" alt="" style={{width: "24px", marginRight: "8px"}}/> Original store product</div>
                <div class="col-6 mb-3"><img src="../assets/productDetails/warranty.png" alt="" style={{width: "24px", marginRight: "8px"}}/> Long term warranty</div>
                <div class="col-6 mb-3"><img src="../assets/productDetails/trusted.png" alt="" style={{width: "24px", marginRight: "8px"}}/> 100% trusted shop</div>
                <div class="col-6 mb-3"><img src="../assets/productDetails/monthly.png" alt="" style={{width: "24px", marginRight: "8px"}}/> Monthly installment</div>
            </div>
        </div>
        <div className="container m-0 mt-3 d-flex align-items-center gap-1">
            <p className='m-0 p-0 me-3 fs-6 fw-normal'>Share</p>
            <img src="../assets/productDetails/fb.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
            <img src="../assets/productDetails/twitter.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
            <img src="../assets/productDetails/wp.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
            <img src="../assets/productDetails/insta.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
            <p className='m-0 p-0 ms-4 fs-6 fw-normal'>Add to favourite</p>
            <img src="../assets/productDetails/fav.png" alt="" style={{width: "24px", marginRight: "8px"}}/>
        </div>
    </div>
  );
};

export default ProductInfo;
