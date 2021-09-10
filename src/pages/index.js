import * as React from 'react';
import '../css/styles.css';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Featured from '../components/main/Featured';

const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <Featured />
    </main>
  );
};

export default IndexPage;
