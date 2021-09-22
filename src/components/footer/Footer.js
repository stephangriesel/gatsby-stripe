import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  const year = new Date().getFullYear();
  return <Wrapper>{year} © GatsbyStripe</Wrapper>;
};

const Wrapper = styled.div`
  width: 50%;
  margin: 4rem auto;
  text-align: center;
`;

export default Footer;
