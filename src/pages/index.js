import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1 className="primary-heading">Donte Hightower</h1>
    <p className="sub-heading">Fullstack Developer</p>
    <div className="homepage">
      <div className="homepage__about">
        <p className="homepage__about--paragraph">
          I started my delve in to Web Development a year ago as a Grow with
          Google Scholar, working on websites for local businesses and meetup
          groups as well as leading a team of remote developers with Chingu.
        </p>
        <p className="homepage__about--paragraph">
          When I'm not programming, you may find me playing tennis, or adding to
          my collection of strated, but unfinished books.
        </p>
      </div>
      <div className="homepage__contact">
        <ul className="contact__method--list">
          <li className="contact__method--item">
            <span className="contact__method--name">Resume</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1PdD0Ss2c_THbxWPs2UXz8AL3UDXwu3dP93KdjdOhWiA/edit?usp=sharing"
              className="contact__method--link"
            >
              View Here
            </a>
          </li>
          <li className="contact__method--item">
            <span className="contact__method--name">Email</span>
            <a
              href="mailto:dontedhightower@gmail.com"
              className="contact__method--link"
            >
              dontedhightower@gmail.com
            </a>
          </li>
          <li className="contact__method--item">
            <span className="contact__method--name">Github</span>
            <a
              target="_blank"
              rel="nofollow"
              href="https://github.com/dontehightower"
              className="contact__method--link"
            >
              DonteHightower
            </a>
          </li>
          <li className="contact__method--item">
            <span className="contact__method--name">LinkedIn</span>
            <a
              target="_blank"
              rel="nofollow"
              href="https://www.linkedin.com/in/dontehightower/"
              className="contact__method--link"
            >
              Donte Hightower
            </a>
          </li>
          <li className="contact__method--item">
            <span className="contact__method--name">Codepen</span>
            <a
              target="_blank"
              rel="nofollow"
              href="https://codepen.io/Donte/"
              className="contact__method--link"
            >
              @Donte
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default IndexPage;
