import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <div className="up py-3">
        <div className="container">
          <ul className="d-flex flex-wrap justify-content-between">
            <li>
              <Link className="text-light" to="#">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                About us
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                Contact us
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                Help cenetr
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                Jobs
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                Privecy&Policy
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                Terms&Conditions
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                My Account
              </Link>
            </li>
            <li>
              <Link className="text-light" to="#">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom py-3">
        <p className="text-center text-muted">
          &copy; 2020, All Rights Are Reserved. coded by <strong>Simon </strong>
          with &hearts;
        </p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  .up {
    background: #5e5a83;
    ul {
      margin: 0;
      padding: 0;
    }
    ul li {
      list-style: none;
      margin: 5px;
      padding: 5px;
      color: #fff !important;
    }
  }
  .bottom {
    background: var(--mainBlue);
  }
`;
