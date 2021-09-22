import React from 'react';
import styled from 'styled-components';
import Products from '../products/Products';

const Main = () => {
  return (
    <MainDiv>
      <Products />
    </MainDiv>
  );
};

const MainDiv = styled.div`
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

export default Main;
