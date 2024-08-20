import React from 'react';
import './footer.css';
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">ALEXTHEDEV</a>
      <ul className="footer__permalinks">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contacts">Contacts</a>
      </ul>
      <div className="footer__socials">
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://facebook.com" target="_blank">
          <FaFacebookSquare />
        </a>
        <a href="https://github.com" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
      <div className="footer__copyrights">
        <small>
          &copy; 2024 ALEXTHEDEV | All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer