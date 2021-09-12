import * as React from 'react';
import '../css/styles.css';
import HomePage from '../components/homepage';
import ProductsContextProvider from '../context/products-context';

const IndexPage = () => {
  return (
    <ProductsContextProvider>
      <HomePage />
    </ProductsContextProvider>
  );
};

export default IndexPage;
