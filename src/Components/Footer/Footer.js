import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__body">
          <div className="footer__title df aic jcsb">
            <div className="footer__title--text">
              <h1>Монтажник | Крепежник</h1>
              <p>Стройматериалы для Вас</p>
            </div>
            {/* <div className="footer__title--search">
              <input type="text" placeholder="Подпишись на нашу рассылку" />
              <button>Отправить</button>
            </div> */}
          </div>
          <div className="footer__body df aic jcsb">
            <div className="footer--section footer__social">
              <a
                href="https://www.instagram.com/montajnikkerch/"
                rel="noreferrer"
                target="_blank"
                style={{
                  marginRight: 10,
                }}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://vk.com/montajnik.kerch"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-vk"></i>
              </a>
            </div>
            <div className="footer--section footer__payment df aic jcc">
              <img
                width={34}
                height={26}
                src="images/payment/MASTERCARD.svg"
                alt="Mastercard"
              />
              <img
                width={34}
                height={26}
                src="images/payment/VISA.svg"
                alt="Visa"
                style={{
                  margin: "0 10px",
                }}
              />
              <img
                width={34}
                height={26}
                src="images/payment/MIR.svg"
                alt="МИР"
              />
            </div>
            <div className="footer--section footer__copyright df aic jcfe">
              Copyright © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
