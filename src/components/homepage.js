import React from 'react';
import Layout from './shared/Layout';
import Hero from './hero/Hero';
import Main from './main/Main';
import FeaturedCollection from './featured-collection/featured-collection';

const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Main />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default HomePage;
