import React from "react";
import { Schedule } from "../";

function HeaderTablet({ toggleMenu }) {
  return (
    <div className="header__tablet tablet">
      <div className="tablet__top">
        <div className="container df aic">
          <div className="logo">
            <img width={20} height={20} src="/logo120.svg" alt="Logo" />
          </div>
          <div className="header--section daily__schedule">
            <Schedule />
          </div>
          <div className="contact__us header--section df aic jcfe">
            <a href="https://nemoknakerch.ru" className="contact--link">
              Контакты
            </a>
          </div>
        </div>
      </div>
      <div className="tablet__bottom df aic">
        <div className="container df aic">
          <div className="tablet__burger df aic jcc" onClick={toggleMenu}>
            <img src="images/headerIcons/burgerOpen.svg" alt="Menu open" />
          </div>
          <div className="tablet__search">
            <div className="tablet__search--input">
              <img src="images/headerIcons/searchIcon.svg" alt="Search Icon" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="tablet__buttons df aic jcc">
            <div
              className="button cart"
              style={{
                color: "rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => alert("В разработке")}
            >
              <img src="images/headerIcons/cartIcon.svg" alt="Cart Icon" />
              <div className="badge">0</div>
            </div>
            <div
              className="button profile"
              style={{
                color: "rgba(0, 0, 0, 0.2)",
              }}
              onClick={() => alert("В разработке")}
            >
              <img
                src="images/headerIcons/profileIcon.svg"
                alt="Profile Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTablet;
