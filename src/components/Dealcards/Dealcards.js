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
          <h5>₹263,994.00</h5>
          <img src="../assets/star.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Dealcards;
