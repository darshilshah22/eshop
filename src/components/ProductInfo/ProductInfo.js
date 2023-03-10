import React from 'react';
import "./productInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const ProductInfo = () => {
    return (
        <div className='product_info'>
            <p>Lenovo IdeaPad Slim 5 Intel Core i5 11th Gen 15.6" (39.62cm) FHD IPS Thin & Light Laptop
                (16GB/512GB SSD/Windows 11/Office 2021/Backlit/FPR/3months Game Pass/Graphite Grey/1.66Kg), 82FG01B5IN</p>
            <div className="rating_info">
                <img src="../assets/productDetails/ratings.png" alt="" />
                <p>(4.7) - 81 ratings</p>
            </div>
            <div className="price_info">
                <h1>₹59,490</h1>
                <p>Inclusive of all taxes</p>
                <p>EMI starts at ₹2,842. No Cost EMI available EMI options</p>
            </div>
            <div className="choose_color">
                <p className='color_title'>Choose Color</p>
                <div className="color_option">
                    <p>Black</p>
                    <p>Gray</p>
                    <p>White</p>
                    <p>Red</p>
                </div>
            </div>
            <div className="choose_memory">
                <p className='color_title'>Memory (RAM)</p>
                <div className="color_option">
                    <p>4GB</p>
                    <p>8GB</p>
                    <p>16GB</p>
                    <p>32GB</p>
                </div>
            </div>
            <div className="choose_memory">
                <p className='color_title'>Quantity</p>
                <div className="select_quantity">
                    <FontAwesomeIcon icon={faPlus} style={{ backgroundColor: "#DEDEDE", padding: "5px" }} />
                    <p>1</p>
                    <FontAwesomeIcon icon={faMinus} style={{ backgroundColor: "#DEDEDE", padding: "5px" }} />
                </div>
            </div>
            <div className="btn_info">
                <button className="buyNow_btn">Buy Now</button>
                <button className="addtocart_btn"><img src="../assets/productDetails/cart.svg" alt="" /> Add to Cart</button>
            </div>
            <div class="container" style={{borderBottom: "1px solid #E2E2E2", margin: "0"}}>
                <div class="row">
                    <div class="col-lg mb-3"><img src="../assets/productDetails/original.png" alt="" style={{width: "24px", marginRight: "8px"}}/> Original store product</div>
                    <div class="col-lg mb-3"><img src="../assets/productDetails/warranty.png" alt="" style={{width: "24px", marginRight: "8px"}}/> Long term warranty</div>
                </div>
                <div class="row">
                    <div class="col-lg mb-3"><img src="../assets/productDetails/trusted.png" alt="" style={{width: "24px", marginRight: "8px"}}/> 100% trusted shop</div>
                    <div class="col-lg mb-3"><img src="../assets/productDetails/monthly.png" alt="" style={{width: "24px", marginRight: "8px"}}/> Monthly installment</div>
                </div>
            </div>
            <div className="container m-0 mt-4 d-flex align-items-center gap-1">
                <p className='m-0 p-0 me-3 fs-6 fw-normal'>Share</p>
                <img src="../assets/productDetails/fb.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
                <img src="../assets/productDetails/twitter.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
                <img src="../assets/productDetails/wp.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
                <img src="../assets/productDetails/insta.png" alt="" style={{width: "33px", marginRight: "8px"}}/>
                <p className='m-0 p-0 ms-4 fs-6 fw-normal'>Add to favourite</p>
                <img src="../assets/productDetails/fav.png" alt="" style={{width: "24px", marginRight: "8px"}}/>
            </div>
        </div>
    )
}

export default ProductInfo