import React from "react";
import "./Promo.scss";

function Promo({ children }) {
  return (
    <section className="promo">
      <div className="left-arrow">
        <i className="fas fa-chevron-left"></i>
      </div>
      <div className="right-arrow">
        <i className="fas fa-chevron-right"></i>
      </div>
      <div className="promo__content">{children}</div>
    </section>
  );
}

export default Promo;
