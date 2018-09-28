import React from 'react';
import { css } from 'react-emotion';

const Header = () => {
  const headerStyles = css`
    margin: 15vh 0;
  `;

  const headingStyles = css`
    font-size: 6rem;
    line-height: 1.5;
    font-weight: 300;
    text-align: center;
  `;

  const subHeadingStyles = css`
    font-size: 3.2rem;
    line-height: 1.5;
    text-align: center;
  `;
    return (
    <header className={headerStyles}>
      <h1 className={headingStyles}>Donte Hightower</h1>
      <p className={subHeadingStyles}>Front End Engineer</p>
    </header>
  );
};

export default Header;
