import React from "react";
import { Schedule } from "../";
import { CartIcon, SearchIcon, UserIcon } from "../../Icons";
import "./Header.scss";

function Header({ topCenter, topRight }) {
  return (
    <div className="header">
      <div className="header__top">
        <div className="header--section left">
          <Schedule />
        </div>
        <div className="header--section center">
          <div className="df aic">
            <a
              href="https://yandex.ru/maps/11464/kerch/?ll=36.444900%2C45.338084&mode=poi&poi%5Bpoint%5D=36.444898%2C45.337989&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D18907521170&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=20.27"
              target="_blank"
              rel="noreferrer"
              className="df aic location__link"
            >
              <i class="fas fa-map-marker-alt" style={{ marginRight: 5 }}></i>
              <p>улица Ворошилова, 4</p>
            </a>
            <a href="javascript://" className="contact--link">
              Контакты
            </a>
          </div>
        </div>
        <div className="header--section right">
          <div className="df aic">
            <p
              style={{
                marginRight: 10,
              }}
            >
              Звоните: <a href="tel:89780473700">+7 (978) 047 37 00</a>
            </p>
            <a
              href="https://www.instagram.com/montajnikkerch/"
              rel="noreferrer"
              target="_blank"
              style={{
                marginRight: 10,
              }}
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://vk.com/montajnik.kerch"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-vk"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="header__bottom df aic">
        <div className="header__logo">
          <a href="javascript://">
            <img width={41} height={41} src="logo120.svg" alt="Logo" />
          </a>
        </div>
        <nav className="header__menu df aic">
          <div className="header__menu--link">Главная</div>
          <div className="header__menu--link" disabled>
            Интернет-магазин
          </div>
          <div className="header__menu--link">Наши работы</div>
          <div className="header__menu--link">О нас</div>
          <div className="header__menu--link red-button">Окна</div>
        </nav>
        <div className="header__buttons df aic">
          <div className="icon" disabled>
            <SearchIcon />
          </div>
          <div className="icon cart-icon" disabled>
            <div className="badge df aic jcc">0</div>
            <CartIcon />
          </div>
          <div className="icon" disabled>
            <UserIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
