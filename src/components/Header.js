import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <div className="header">
    <h2 className="logo">Donte Hightower</h2>
    {/* <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list--items">
          <Link to="/about" className="navigation__list--links">
            About
          </Link>
        </li>
        <li className="navigation__list--items">
          <Link to="/portfolio" className="navigation__list--links">
            Portfolio
          </Link>
        </li>
        <li className="navigation__list--items">
          <Link to="/about" className="navigation__list--links">
            Contact
          </Link>
        </li>
      </ul>
    </nav> */}
  </div>
);

export default Header;
