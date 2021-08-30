import React from 'react';
import styled from 'styled-components';
import {Link} from 'gatsby';
import Cart from '../../components/cart-icon/Cart';

const Header = () => {
  return (
    <Nav>
      <div>
        <Link>GatsbyStripe</Link>
      </div>
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/contact'>
              <Cart />
            </Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  ul {
    display: flex;
    margin: 0;
    list-style: none;
  }
  li {
    padding: 0 1em;
  }
`;

export default Header;
