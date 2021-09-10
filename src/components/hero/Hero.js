import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroBG>
      <div className='hero-wrapper'>
        <div className='container'>
          <h1 className='title'>Good product</h1>
          <h2 className='subtitle'>Quality Brand</h2>
        </div>
        <div>
          <button>SHOP NOW</button>
        </div>
      </div>
    </HeroBG>
  );
};

const HeroBG = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      center/cover no-repeat;
  height: 100vh;
  .hero-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    .container {
      text-align: center;
      h1,
      h2 {
        color: white;
      }
    }
  }
`;

export default Hero;
