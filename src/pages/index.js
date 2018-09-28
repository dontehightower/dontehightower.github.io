import React from 'react';
import { css } from 'react-emotion';

import Layout from '../components/layout';
import Header from '../components/header';
import Home from '../components/Home';

const IndexPage = () => {
  const pageStyles = css`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  `;
  return (
    <div className={pageStyles}>
      <Layout>
        <Header />
        <Home />
      </Layout>
    </div>
  );
};

export default IndexPage;
