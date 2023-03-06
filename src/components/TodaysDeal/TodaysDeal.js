import React from "react";
import Dealcards from "../Dealcards/Dealcards";
import "./todaysDeal.css";
import map from "lodash/map";
import range from "lodash/range";

const TodaysDeal = () => {
  return (
    <>
      <div className="title">
        <p className="todaysdeal">Today's Deals</p>
        <p className="endsin">Ends in <span>04</span> : <span>24</span> : <span>39</span></p>
      </div>
      <div className="deal-cards">
        {map(range(10), (_) => (
          <Dealcards />
        ))}
      </div>
      
    </>
  );
};

export default TodaysDeal;
