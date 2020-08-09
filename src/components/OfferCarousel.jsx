import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

class OfferCarousel extends Component {
  state = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  render() {
    const imgs = [
      {
        img: "./img/phone1.jpg",
      },
      {
        img: "./img/phone2.jpg",
      },
      {
        img: "./img/phone3.jpg",
      },
      {
        img: "./img/phone4.jpg",
      },
      {
        img: "./img/phone5.jpg",
      },
      {
        img: "./img/phone6.jpg",
      },
      {
        img: "./img/phone7.jpg",
      },
      {
        img: "./img/phone8.jpg",
      },
    ];
    return (
      <Wrapper>
        <Slider {...this.state}>
          {imgs.map((item) => {
            return (
              <div className="card card-box">
                <img
                  src={item.img}
                  alt="product"
                  width="150px"
                  height="200px"
                  className="p-3"
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Impedit, cupiditate?
                  </p>
                  <ul className="d-flex justify-content-between">
                    <li>
                      <i class="far fa-star"></i>
                    </li>
                    <li>
                      <i class="fas fa-cart-plus"></i>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </Slider>
      </Wrapper>
    );
  }
}

export default OfferCarousel;

const Wrapper = styled.div`
  max-height: 380px;
  margin: 60px 0;
  .card-box {
    cursor: pointer;
    img {
      margin-left: 60px;
      transition: all 0.4s ease-in-out;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style: none;
    cursor: pointer;
  }
`;
