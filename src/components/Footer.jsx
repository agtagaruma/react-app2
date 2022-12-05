import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <FooterContainer>
      <span>Copyright &copy; 2022 viahero.com . All rights reserved</span>
      <span>Terms and Conditions</span>
      {/* replace later */}
      {/* <ul className="links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#services">About</a>
        </li>
        <li>
          <a href="#recommend">Places</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul> */}
      <ul className="social__links">
        <li>
          
          <a href="https://www.facebook.com/agtagaruma" alt="fb">
            <BsFacebook />
          </a>

        </li>

        <li>

          <a href="https://www.facebook.com/agtagaruma" alt="fb">
            <AiFillInstagram />
          </a>

        </li>

        <li>

          <a href="https://www.facebook.com/agtagaruma" alt="fb">
            <BsLinkedin />
          </a>
          
        </li>
        
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
