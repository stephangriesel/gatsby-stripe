import * as React from 'react';
import '../css/styles.css';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Featured from '../components/main/Featured';
import ProductsContextProvider from '../context/products-context';

const IndexPage = () => {
  return (
    <ProductsContextProvider>
      <main>
        <Header />
        <Hero />
        <Featured />
      </main>
    </ProductsContextProvider>
  );
};

export default IndexPage;
