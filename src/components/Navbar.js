import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/*https://www.iconfinder.com/icons/1243689/call_phone_icon Creative Commons (Attribution 3.0 Unported); https://www.iconfinder.com/Makoto_msk */}
        <ul className="navbar-nav align-items-cemter">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              SK MobileStore
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
