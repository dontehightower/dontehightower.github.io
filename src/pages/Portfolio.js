import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/Card';

const Portfolio = () => (
  <section className="portfolio">
    <div className="portfolio__grid">
      <div className="portfolio__card">
        <img
          className="portfolio__card--image image-1"
          src="./assets/natours-laptop.png"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Natours</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
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
          <a
            href="https://dontehightower.github.io/natours"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/natours"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card--image image-2"
          src="./assets/trillo-laptop.png"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Trillo</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
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
          <a
            href="https://dontehightower.github.io/trillo"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/trillo"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card__image image-3"
          src="./assets/mission-ux.png"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Mission UX</h2>
          <span className="portfolio__card__subtitle">
            <ul className="tech-stack__list">
              <li className="tech-stack__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-sass" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-js" />
              </li>
              <li className="tech-stack__item">
                <i className="devicons devicons-django" />
              </li>
            </ul>
          </span>
        </div>

        <div className="portfolio__card--action-bar">
          <a href="https://mission-ux.com" className="portfolio__card--button">
            Demo
          </a>
          <a href="#" className="portfolio__card--button--disabled">
            Repo Not Available
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card--image image-4"
          src="./assets/nexter-laptop.png"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Nexter</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
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
          <a
            href="https://dontehightower.github.io/nexter"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/nexter"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card--image image-5"
          src="./assets/yelp-camp.jpg"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Yelp Camp</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
              <li className="tech-stack__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-css3-alt" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-js" />
              </li>
              <li className="tech-stack__item">
                <i className="devicons devicons-nodejs" />
              </li>
            </ul>
          </span>
        </div>
        <div className="portfolio__card--action-bar">
          <a
            href="https://dontehightower.github.io/nexter"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/nexter"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card--image"
          src="./assets/catch-of-the-day"
          alt="Catch of The Day"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">COTD</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
              <li className="tech-stack__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech-stack__item">
                <i className="devicons devicons-stylus" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-react" />
              </li>
              <li className="tech-stack__item">
                <i className="devicons devicons-firebase" />
              </li>
              <li className="tech-stack__item">
                <img
                  className="firebase-logo"
                  src="./assets/firebase-logo.svg"
                  alt="Firebase"
                />
              </li>
            </ul>
          </span>
        </div>

        <div className="portfolio__card--action-bar">
          <a
            href="https://dontehightower.github.io/nexter"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/nexter"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>

      <div className="portfolio__card">
        <img
          className="portfolio__card--image"
          src="./assets/feast.png"
          alt="Feast"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Feast</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
              <li className="tech-stack__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-css" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-react" />
              </li>
              <li className="tech-stack__item">
                <img
                  className="redux-logo"
                  src="./assets/redux.svg"
                  alt="Redux"
                />
              </li>
            </ul>
          </span>
        </div>
        <div className="portfolio__card--action-bar">
          <a
            href="https://dontehightower.github.io/nexter"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/nexter"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card--image"
          src="./assets/boxer-mail.png"
          alt="Boxer Mail"
        />
        <div className="portfolio__card--header">
          <h2 className="portfolio__card--title">Boxer Mail</h2>
          <span className="portfolio__card--subtitle">
            <ul className="tech-stack__list">
              <li className="tech-stack__item">
                <i className="fab fa-html5" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-css" />
              </li>
              <li className="tech-stack__item">
                <i className="fab fa-react" />
              </li>
              <li className="tech-stack__item">
                <img
                  className="redux-logo"
                  src="./assets/redux.svg"
                  alt="Redux"
                />
              </li>
            </ul>
          </span>
        </div>

        <div className="portfolio__card--action-bar">
          <a
            href="https://dontehightower.github.io/nexter"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/nexter"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
      <div className="portfolio__card">
        <img
          className="portfolio__card--image"
          src="./assets/nexter-laptop.png"
        />
        <h2 className="portfolio__card--title">
          Nexter
          <span className="portfolio__card--subtitle" />
        </h2>

        <div className="portfolio__card--action-bar">
          <a
            href="https://dontehightower.github.io/nexter"
            className="portfolio__card--button"
          >
            Demo
          </a>
          <a
            href="https://github.com/dontehightower/nexter"
            className="portfolio__card--button"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
