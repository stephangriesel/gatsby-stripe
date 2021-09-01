import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <section className='hero'>
      <div>
        <div className='container'>
          <h1 className='title'></h1>
          <h2 className='subtitle'></h2>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </section>
  );
};

const Hero = styled.div`
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0.2)),
      url('../images/hero-bg.jpg');
  }
`;

export default Hero;
