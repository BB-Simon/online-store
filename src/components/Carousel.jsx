import React from "react";
import { ProductConsumer } from "../context";
const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide mb-5"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <ProductConsumer>
          {(value) => {
            return value.carouselImgs.map((item) => {
              return (
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to={item}
                ></li>
              );
            });
          }}
        </ProductConsumer>
      </ol>
      <div className="carousel-inner">
        <ProductConsumer>
          {(value) => {
            return value.carouselImgs.map((item) => {
              return (
                <div
                  className={
                    item.id === 1 ? "carousel-item active" : "carousel-item"
                  }
                  key={item.id}
                >
                  <img
                    src={item.img}
                    className="d-block w-100"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
              );
            });
          }}
        </ProductConsumer>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
