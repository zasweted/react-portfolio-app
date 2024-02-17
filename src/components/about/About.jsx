import React from 'react';
import './about.css';
import AboutMeImage from '../../assets/photos/portfolio.jpg';
import { FaAward } from "react-icons/fa";
import { LuUsers2 } from "react-icons/lu";
import { GoProjectSymlink } from "react-icons/go";





const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={AboutMeImage} alt="about_me_image" className="about__me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className='about__card-icon'/>
              <h5>Experience</h5>
              <small>3+ Years of Experience</small>
            </article>

            <article className="about__card">
              <LuUsers2 className='about__card-icon'/>
              <h5>Clients</h5>
              <small>300+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <GoProjectSymlink className='about__card-icon'/>
              <h5>Projects</h5>
              <small>80+ completed Projects</small>
            </article>

          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias recusandae earum quo, magnam, enim et explicabo illo rem, delectus rerum nam alias quod voluptatibus tempora sint perspiciatis voluptatum sed.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let`s talk</a>
        </div>
      </div>
    </section>
  )
}

export default About