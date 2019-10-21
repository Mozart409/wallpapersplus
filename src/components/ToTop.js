import React from "react";
import ScrollToTop from "react-scroll-up";

function ToTop() {
  return (
    <div>
    <ScrollToTop showUnder={160} style={{right: 0}} >
      <div className="bg-blue-700 text-white rounded px-2 py-1">
      <span 
      className="UprightText">
       TOP
      </span>
      </div>
    </ScrollToTop>
    </div>
  );
}
export default ToTop;
