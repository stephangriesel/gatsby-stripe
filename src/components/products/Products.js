import React, { usestate, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BiCart } from 'react-icons'

import Image from './image'

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

header {
    background: #ff8c00;
    padding: 1rem 2.5vw;
    font-size: 35px;
}

header a {
    color: white;
    font-weight: 800;
    text-decoration: none;
}

main {
    margin: 2rem 2rem 2rem 2rem;
    width: 90vw;
}

.products {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 3rem;
}

.product img {
    max-width: 100%;
}

.product button {
    background: #ff8c00;
    border: none;
    border-radius: 0.25rem;
    color: white;
    font-size: 1.25rem;
    font-weight: 800;
    line-height: 1.25rem;
    padding: 0.25rem;
    cursor: pointer;
}

.cart {
    position: absolute;
    display: block;
    width: 48px;
    height: 48px;
    top: 100px;
    right: 40px;
    cursor: pointer;
}

.cart-badge {
    position: absolute;
    top: -11px;
    right: -13px;
    background-color: #FF6600;
    color: #ffffff;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 14px;
    border-radius: 19px;
}


  @media (min-width: 992px) {
  }
`;

export default Products;