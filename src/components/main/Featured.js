import React from 'react';
import styled from 'styled-components';

const Featured = () => {
  return (
    <FeatDiv>
      <div className='half'>
        <img
          src='https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='product'
        />
      </div>
      <div className='half'>
        <h1>Featured Product</h1>
        <p>Camera</p>
      </div>
    </FeatDiv>
  );
};

const FeatDiv = styled.div`
  display: flex;
  .half {
    max-width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    img {
      width: 70em;
    }
  }
`;

export default Featured;
