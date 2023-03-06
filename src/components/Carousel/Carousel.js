import React from "react";
import "./carousel.css";

const Carousel = () => {
  return (
    <div className="app">
      <div
        id="carouselExampleIndicators"
        className="carousel slide pt-5 mb-5 ms-5 me-5"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="text-i">
              <h2 className="price">Under $1,999</h2>
              <p className="desc">Top rated Electronics & accessories</p>
              <button type="button" className="btn btn-light">
                Buy Now
              </button>
            </div>
            <img src="../assets/image1.png" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <div className="text-i">
              <h2 className="price">Under $1,999</h2>
              <p className="desc">Top rated Electronics & accessories</p>
              <button type="button" className="btn btn-light">
                Buy Now
              </button>
            </div>
            <img src="../assets/image1.png" className="d-block w-100" alt="" />
          </div>
          <div className="carousel-item">
            <div className="text-i">
              <h2 className="price">Under $1,999</h2>
              <p className="desc">Top rated Electronics & accessories</p>
              <button type="button" className="btn btn-light">
                Buy Now
              </button>
            </div>
            <img src="../assets/image1.png" className="d-block w-100" alt="" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <img className="prev-icon" src="../assets/prev.svg" alt="" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <img className="next-icon" src="../assets/next.svg" alt="" />
        </button>
      </div>

      <div className="row-grid">
        <div
          className="card-1"
          style={{
            background: "linear-gradient(90deg, #BF5AE0 0%, #A811DA 100%)",
          }}
        >
          <div className="pp-icon">
            <img src="../assets/pp.svg" alt="" />
            <h4>Popular Products</h4>
          </div>
          <p>Get the popular product now</p>
        </div>
        <div
          className="card-2"
          style={{
            background: "linear-gradient(90deg, #06BEB6 0%, #48B1BF 100%)",
          }}
        >
          <div className="pp-icon">
            <img src="../assets/truck-fast.svg" alt="" />
            <h4>Free Shapping</h4>
          </div>
          <p>No charge for each delivery</p>
        </div>
        <div
          className="card-3"
          style={{
            background: "linear-gradient(90deg, #F85032 0%, #E73827 100%)",
          }}
        >
          <div className="pp-icon">
            <img src="../assets/wallet.svg" alt="" />
            <h4>Quick Payment</h4>
          </div>
          <p>100% secure payment</p>
        </div>
        <div
          className="card-4"
          style={{
            background: "linear-gradient(90deg, #FE8C00 0%, #F83600 100%)",
          }}
        >
          <div className="pp-icon">
            <img src="../assets/wishlist.svg" alt="" />
            <h4>Bestseller</h4>
          </div>
          <p>Quick support</p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Carousel;
