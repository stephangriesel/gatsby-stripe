import React, {useContext, useState, useEffect} from 'react'
import styled from 'styled-components'
import { navigate } from 'gatsby'
import {ProductsContext} from '../../context/products-context'
import Layout from '../shared/Layout'

const SingleProduct = ({match, history:{push}}) => {
    const {products} = useContext(ProductsContext)
    const {id} = match.params
    const [product, setProduct] = useState(null)
    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id))

        // if product does not exist, redirect shop page
        if(!product){
            return navigate('/shop')
        }

        setProduct(product)
    });

    // wait for product
    if(!product) { return null }

    const { imageUrl, title, price, description} = product;
    return (
        <Layout>
            <Wrapper>
                <div>
                    <img src={imageUrl} alt="product" />
                </div>
                <div>
                    <div>
                        <h3>{title}</h3>
                        <p>{price}</p>
                    </div>
                </div>
                <div>
                    <button>ADD</button>
                    <button>CHECKOUT</button>
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </Wrapper>
        </Layout>
    )
}


const Wrapper = styled.div`

  @media (min-width: 992px) {
  }
`;

export default SingleProduct