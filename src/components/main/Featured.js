import React from 'react';
import styled from 'styled-components';

const Featured = () => {
  return (
    <FeatDiv>
      <div className='item'>
        <img
          src='https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          alt='product'
        />
      </div>
      <div className='item'>
        <h1>Featured Product</h1>
        <p>Camera</p>
      </div>
    </FeatDiv>
  );
};

const FeatDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  gap: 1em;
  padding: 1em;
  .item {
    padding: 5.5em 1em;
  }
  img {
    width: 100%;
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Featured;
