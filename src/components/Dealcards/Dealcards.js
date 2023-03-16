import React from "react";
import "./dealcards.css";

const Dealcards = ({ deall }) => {
  return (
    <div className="card">
      <img src={deall.icon} className="card-img-top" alt="..." />
      <div className="card-body d-flex flex-column justify-content-between">
        <p className="card-title">{deall.title}</p>
        <div className="price-sec">
          <h5>{deall.price}</h5>
          <span className="rating">
            <img src="../assets/star.png" alt="" />
            <p>{deall.ratings}</p>
          </span>
        </div>
      </div>
    </div>
    // <div class="card w-auto m-0" style={{minWidth: "20%"}}>
    //   <img src={deall.icon} class="card-img-top" alt="..." />
    //   <div class="card-body d-flex flex-column justify-content-between">
    //     <h5 class="card-title">{deall.title}</h5>
    //     <div className="d-flex align-items-center justify-content-between mt-4">
    //       <h5 className="m-0 fw-semibold">{deall.price}</h5>
    //       <span className="d-flex align-items-center gap-1">
    //         <img src="../assets/star.png" alt="" />
    //         <p className="m-0">{deall.ratings}</p>
    //       </span>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Dealcards;
