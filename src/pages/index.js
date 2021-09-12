import * as React from 'react';
import '../css/styles.css';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import FeaturedCollection from '../components/featured-collection/featured-collection';
import ProductsContextProvider from '../context/products-context';

const IndexPage = () => {
  return (
    <ProductsContextProvider>
      <main>
        <Header />
        <Hero />
        <Main />
        <FeaturedCollection />
      </main>
    </ProductsContextProvider>
  );
};

export default IndexPage;
