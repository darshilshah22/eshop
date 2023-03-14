import React from "react";
import GradientSVG from "./gradientSVG";
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProductReview = () => {
  const idCSS = "hello";
  const percentage = 4.5;
  return (
    <div className="container ms-3">
      <p className="m-0 fw-semibold fs-5">Product Review</p>
      <div style={{ height: "150px", width: "150px" }}>
        <GradientSVG />
        <CircularProgressbarWithChildren
          strokeWidth={15}
          value={(percentage/5)*100}
          styles={{
            path: { stroke: `url(#${idCSS})`, strokeLinecap: 'butt' },
            trail: {
              stroke: "#E2E2E2"
            },
          }}
        >
          <div style={{ fontSize: "36px", marginTop: -5, color: "black" }}>
            <strong>{percentage}</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default ProductReview;
