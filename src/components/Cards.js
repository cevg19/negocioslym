import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Conoce más de nosotros</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="Servicios públicos"
              // label="Pagos"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Fotocopias / Impresiones"
              //   label="Miscelania"
              path="/products"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Papeleria "
              //   label="Miscelania"
              path="/products"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Dulceria"
              label="Miscelania"
              path="/products"
            />
            <CardItem
              src="images/img-5.jpg"
              text="Maquillaje"
              // label="Miscelania"
              path="/products"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
