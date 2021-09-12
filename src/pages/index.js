import * as React from 'react';
import '../css/styles.css';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
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
        <Footer />
      </main>
    </ProductsContextProvider>
  );
};

export default IndexPage;
