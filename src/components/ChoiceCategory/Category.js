import React from "react";
import "./category.css";
import map from "lodash/map";
import range from "lodash/range";
import cates from "../../constants.js"

const Category = () => {
  return (
    <div className="category">
      <div className="brand_title">
        <p>Choice Category</p>
      </div>
      <div className="brands_row">
        {cates.map((cat, index) => (
          <div className="brands">
            <img src={cat.icon} alt="" />
            <p>{cat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
