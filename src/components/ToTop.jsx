import React from "react";
import { useEffect } from "react";
import "./ToTop.css";

function ToTop() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="top-container">
      <button className="to-top" onClick={scrollToTop}>
        Top
      </button>
    </div>
  );
}

export default ToTop;
