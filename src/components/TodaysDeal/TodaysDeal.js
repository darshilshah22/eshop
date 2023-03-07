import React from "react";
import Dealcards from "../Dealcards/Dealcards";
import "./todaysDeal.css";

const TodaysDeal = ({title, isEnd, deals}) => {
  return (
    <>
      <div className="title">
        <p className="todaysdeal">{title}</p>
        {isEnd ? <p className="endsin">Ends in <span>04</span> : <span>24</span> : <span>39</span></p> : <></>}
      </div>
      <div className="deal-cards">
        {deals?.map((deal) => (
          <Dealcards deall={deal}/>
        ))};
      </div>
    </>
  );
};

export default TodaysDeal;
