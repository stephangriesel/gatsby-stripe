import React, {useContext} from 'react';
import {ProductsContext} from '../../context/products-context';
import FeaturedProduct from '../shared/featured-product';
import styled from 'styled-components';

const FeaturedCollection = () => {
  const {products} = useContext(ProductsContext);
  const productItems = products
    .filter((product, i) => i < 3)
    .map((product) => <FeaturedProduct {...product} key={product.id} />);

  return (
    <Wrapper>
      <div>{productItems}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default FeaturedCollection;
