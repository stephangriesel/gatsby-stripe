import React, { useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BiCart } from 'react-icons'

import Image from '../image'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios("/api/get-products").then(result => {
            if (result.status !== 200) {
              console.error("Error loading shopnotes");
              console.error(result);
              return;
            }
            setProducts(result.data);
            setLoaded(true);
        });
    }, []);

    const addToCart = sku => {
        // do something
    }

    const buyOne = sku => {
        // do something
    }

    const checkOut = () => {
        // do something
    } 

    return (
        <Wrapper>
        <div className="cart" onClick={() => checkOut()}>
            <div className="cart-icon">
            <BiCart 
                className="img" 
            />
            </div>
            <div className="cart-badge">{cart.length}</div>
        </div>

        {
            loaded ? (
                <div className="products">
                    {products.map((product, index) => (
                        <div className="product" key={`${product.sku}-image`}>

                            <Image fileName={product.image.key} 
                                style={{ width: '100%' }} 
                                alt={product.name} />
                            <h2>{product.name}</h2>
                            <p className="description">{product.description}</p>
                            <p className="price">Price: <b>${product.amount}</b></p>
                            <button onClick={() => buyOne(product.sku)}>Buy Now</button>
                            {' '}
                            <button onClick={() => addToCart(product.sku)}>Add to Cart</button> 
                        </div>
                    ))
                    }
                </div>
            ) : (
                <h2>Loading...</h2>
            )
        }
        </Wrapper>
    )
};

const Wrapper = styled.div`


  @media (min-width: 992px) {
  }
`;

export default Products;