import React from "react";
import ScrollToTop from "react-scroll-up";

function ToTop() {
  return (
    <ScrollToTop showUnder={160}>
      <span className="bg-blue-700 text-white p-1 xs:p-1 sm:p-2 md:p-4 lg:p-6 xl:p-8 invisible md:visible lg:visible xl:visible rounded hover:shadow-xl">
        UP
      </span>
    </ScrollToTop>
  );
}
export default ToTop;
