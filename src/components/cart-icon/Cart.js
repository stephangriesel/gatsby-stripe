import React from 'react';
import ShoppingBag from '../../images/shopping-bag.png';
import styled from 'styled-components';

const Cart = () => {
  return (
    <Bag className='cart-container'>
      <img src={ShoppingBag} alt='Bag' />
      <span className='cart-count'>3</span>
    </Bag>
  );
};

const Bag = styled.div`
  cursor: pointer;
  img {
    width: 1em;
  }
  .cart-count {
    background-color: black;
    color: white;
    margin-left: -10px;
    border-radius: 10px;
    padding-right: 4px;
  }
`;

export default Cart;
