import React from 'react';
import './portfolio.css';
import PORTFOLIO_IMG_1 from '../../assets/portfolio-images/portfolio-1.jpg';
import PORTFOLIO_IMG_2 from '../../assets/portfolio-images/portfolio-2.jpg';
import PORTFOLIO_IMG_3 from '../../assets/portfolio-images/portfolio-3.jpg';
import PORTFOLIO_IMG_4 from '../../assets/portfolio-images/portfolio-4.jpg';
import PORTFOLIO_IMG_5 from '../../assets/portfolio-images/portfolio-5.jpg';
import PORTFOLIO_IMG_6 from '../../assets/portfolio-images/portfolio-6.jpg';

const data = [
  {
    project_id: 1,
    project_image: PORTFOLIO_IMG_1,
    project_title: 'Make Impactful Data Visualizations in Figma with Hyper Charts UI',
    project_code: 'https://github.com/zasweted',
    project_demo: 'https://dribbble.com/shots/23667852-Make-Impactful-Data-Visualizations-in-Figma-with-Hyper-Charts-UI',
  },
  {
    project_id: 2,
    project_image: PORTFOLIO_IMG_2,
    project_title: 'Orion + Hyper Charts + Eclipse',
    project_code: 'https://github.com/zasweted',
    project_demo: 'https://dribbble.com/shots/23667841-Orion-Hyper-Charts-Eclipse',
  },
  {
    project_id: 3,
    project_image: PORTFOLIO_IMG_3,
    project_title: 'Stunning and professional-looking data visualizations templates',
    project_code: 'https://github.com/zasweted',
    project_demo: 'https://dribbble.com/shots/23667833-Stunning-and-professional-looking-data-visualizations-templates',
  },
  {
    project_id: 4,
    project_image: PORTFOLIO_IMG_4,
    project_title: 'Orion UI kit – design system for Figma',
    project_code: 'https://github.com/zasweted',
    project_demo: 'https://dribbble.com/shots/23667774-Orion-UI-kit-design-system-for-Figma',
  },
  {
    project_id: 5,
    project_image: PORTFOLIO_IMG_5,
    project_title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    project_code: 'https://github.com/zasweted',
    project_demo: 'https://dribbble.com/shots/23667741-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    project_id: 6,
    project_image: PORTFOLIO_IMG_6,
    project_title: 'Eclipse - Figma dashboard UI kit for data design web apps',
    project_code: 'https://github.com/zasweted',
    project_demo: 'https://dribbble.com/shots/23534898-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
];


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ project_id, project_image, project_title, project_code, project_demo }) => {
            return (
              <article key={project_id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={project_image} alt={project_title} />
                <h3>{project_title}</h3>
                </div>
                <div className="portfolio__cta">
                  <a href={project_code} target="_blank" className='btn'>Github</a>
                  <a href={project_demo} target="_blank" className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>

  )
}

export default Portfolio