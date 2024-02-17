import React from 'react';
import './header.css';
import Cta from './Cta';
import Portfolio_img from '../../assets/photos/portfolio.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i`m</h5>
        <h1>Aleksandr</h1>
        <h5 className="text-light">Fullstack Developer</h5>

        <Cta />

        <HeaderSocials />
        
        <div className="portfolio__main">
          <img src={ Portfolio_img } alt="portfolio_image" />
        </div>

        <a href="#contacts" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header