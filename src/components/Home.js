// This component holds the content for the Homepage. It is imported into the // index.js and combined with the header to makeup the root route of the
// website.

import React from 'react';
import { css } from 'react-emotion';
import { contactMethods } from '../data';

const Home = () => {
  const content = css`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 100rem;
  `;
  const article= css`
    width: 40%;
  `;
  const paragraphStyles = css`
    font-family: 'Monteserrat', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 2rem;
    @media screen and (max-width: 48rem) {
      width: 80%;
    }
  `;
  const contactMethodList = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    height: 16rem;
    @media screen and (max-width: 48rem) {
      width: 80%;
    }
  `;
  const contactMethod = css`
    margin: 0;
    display: grid;
    grid-template-columns: 12rem auto;
  `;
  const contactMethodName = css`
    font-family: 'Monteserrat', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    margin-right: 2rem;
  `;
  const contactMethodLink = css`
    text-decoration: none;
    color: #757575;
    font-size: 1.6rem;
  `;

  const displayContactInfo = () => {
    return contactMethods.map(method => {
      return (
        <li key={contactMethod} className={contactMethod}>
          <span className={contactMethodName}>
            {method.platform}
          </span>
          <a
            className={contactMethodLink}
            target="blank"
            rel="noopener noreferrer"
            href={method.link}
          >{method.username}
          </a>
        </li>
      );
    });
  };

  return (
    <div className={content}>
      <article className={article}>
        <p className={paragraphStyles}>
          I started my delve in to Web Development a year ago as a Grow with
          Google Scholar. Since then, I've enjoyed using my skills to
          build websites for local businesses and meetup
          groups and lead a team of remote developers with Chingu.
        </p>
        <p className={paragraphStyles}>
          When I'm not programming, you may find me playing tennis, or adding to
          my collection of started, but unfinished books.
        </p>
      </article>
      <ul className={contactMethodList}>
        {displayContactInfo()}
      </ul>
    </div>
  );
};

export default Home;