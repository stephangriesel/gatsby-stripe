import React from 'react';
import styled from 'styled-components';

const FeaturedProduct = (product) => {
  const {title, imageUrl, price} = product;

  return (
    <Wrapper className='featured-product'>
      <div className='item featured-image'>
        <img src={imageUrl} alt='product' />
      </div>
      <div className='item name-price'>
        <h3>{title}</h3>
        <p>€{price}</p>
        <button className='button'>ADD</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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

export default FeaturedProduct;
