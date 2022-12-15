/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import PizzaFaydalari from "./PizzaFaydalari";
import FooterSiparis from "./FooterSiparis";
import PizzaParty from "./PizzaParty";

function Home() {
  const images = [
    "https://images.deliveryhero.io/image/fd-tr/LH/u5ac-hero.jpg",
    "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg",
    "https://cdn.pixabay.com/photo/2018/07/09/09/34/pizza-3525673_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/04/09/09/22/pizza-1317699_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/03/11/33/pizza-1949183_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/06/18/19/33/pizza-814044_960_720.jpg",
  ];
  return (
    <>
      <div className="container-home">
        <Zoom scale={1.2} indicators={true}>
          {images.map((each, index) => (
            <div key={index} style={{ width: "100%" }}>
              <Link to="/pizza" id="pizza-form">
                <img
                  style={{ minWidth: "100%", maxHeight: "50rem" }}
                  alt="Slide Image"
                  src={each}
                  id="sliderImg"
                />
              </Link>
            </div>
          ))}
        </Zoom>
      </div>

      <section>
        <Link className="link buttonInDiv" to="/pizza" >
          <button>Sipariş Oluştur</button>
        </Link>
      </section>

      <PizzaFaydalari />
      <PizzaParty/>
      <FooterSiparis />
    </>
  );
}

export default Home;
