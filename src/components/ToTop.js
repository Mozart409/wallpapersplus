import React from "react";
import ScrollToTop from "react-scroll-up";

function ToTop() {
  return (
    <div>
      <ScrollToTop showUnder={160} style={{ right: 7 }}>
        <span id="UprightText">TOP</span>
      </ScrollToTop>
    </div>
  );
}
export default ToTop;
