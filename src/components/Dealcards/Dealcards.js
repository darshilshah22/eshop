import React from "react";
import "./dealcards.css";

const Dealcards = () => {
  return (
    <div className="card">
      <img src="../assets/laptop.png" className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-title">
          HP 14s, 11th Gen Intel Core i3-1115G4, 8GB RAM/....
        </p>
        <div className="price-sec">
          <h5>₹59,990</h5>
          <span className="rating">
            <img src="../assets/star.png" alt="" />
            <p>4.9</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dealcards;
