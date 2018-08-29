import React from 'react';
import Link from 'gatsby-link';

const Card = props => {
  return (
    <div className="portfolio__card">
      <img
        className="portfolio__card--image image-1"
        src="../assets/natours-laptop.png"
      />
      <div className="portfolio__card--header">
        <h2 className="portfolio__card--title">{props.project.title}</h2>
        <span className="portfolio__card--subtitle">
          <ul className="tech-stack__list">
            {renderStackIcons}
            <li className="tech-stack__item">
              <i className="fab fa-html5" />
            </li>
            <li className="tech-stack__item">
              <i className="fab fa-sass" />
            </li>
            <li className="tech-stack__item">
              <i className="fab fa-js" />
            </li>
          </ul>
        </span>
      </div>

      <div className="portfolio__card--action-bar">
        <a href={props.project.demo} className="portfolio__card--button">
          Demo
        </a>
        <a href={props.project.repo} className="portfolio__card--button">
          Repo
        </a>
      </div>
    </div>
  );
};

export default Card;
