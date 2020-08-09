import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import OfferCarousel from "./OfferCarousel";
import Title from "./Title";

const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <Carousel />
        <Title name="our" title="letest products" />
        <OfferCarousel />
      </HeaderWrapper>
    </>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  background: var(--subMainBlue);
  width: 100%;
  height: auto;
  overflow: hidden;
`;
