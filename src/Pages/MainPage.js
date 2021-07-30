import React from "react";
import Promo from "../Components/Promo/Promo";
import PageWrapper from "./PageWrapper";
import "./styles/MainPage.scss";

function MainPage() {
  return (
    <PageWrapper>
      <div className="container">
        <Promo>
          <h1>Hello</h1>
        </Promo>
        <section className="about">
          <h2>О нас</h2>
          <div className="about__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              doloremque culpa quidem! Deleniti commodi quaerat iure libero
              quas, doloribus dolore. Officiis rem laboriosam et voluptatibus
              eligendi commodi delectus, tempore consequuntur.
            </p>
          </div>
        </section>
        <section className="advantages df aic jcsa">
          <div className="advantages__card df aic jcc fldc">
            <div className="icon">
              <img
                width={50}
                height={50}
                src="images/advantages/assortment.svg"
                alt="Big assortment"
              />
            </div>
            <div className="title">Большой ассортимент</div>
            <div className="description">
              В магазинах вы найдете огромный выбор разных товаров. От болтов до
              перфораторов
            </div>
          </div>
          <div className="advantages__card df aic jcc fldc">
            <div className="icon">
              <img
                width={50}
                height={50}
                src="images/advantages/steward.svg"
                alt="Big assortment"
              />
            </div>
            <div className="title">Профессиональные сотрудники</div>
            <div className="description">
              Все сотрудники магазинов являются профессионалами своего дела.
              Помогут и подскажут в любой ситуации
            </div>
          </div>
          <div className="advantages__card df aic jcc fldc">
            <div className="icon">
              <img
                width={50}
                height={50}
                src="images/advantages/salary.svg"
                alt="Big assortment"
              />
            </div>
            <div className="title">Цены для всех</div>
            <div className="description">
              Все цены не завышены. Каждый найдет то, что ищет
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}

export default MainPage;
