import React from "react";
import "./dealcards.css";

const Dealcards = ({deall}) => {
  return (
    <div className="card">
      <img src={deall.icon} className="card-img-top" alt="..." />
      <div className="card-body">
        <p className="card-title">
          {deall.title}
        </p>
        <div className="price-sec">
          <h5>{deall.price}</h5>
          <span className="rating">
            <img src="../assets/star.png" alt="" />
            <p>{deall.ratings}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dealcards;
