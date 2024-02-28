import React, { useContext } from 'react'
import '../css/ProductCart.css';
import { useState } from 'react';
import { Rating } from '@mui/material';
import Button from '../generic-components/Button';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { DataContext } from '../App';

const ProductCard = () => {
  const {state:{allProducts, rowQuantity},  AddToCart} = useContext(DataContext);
  const [item, setItem] = useState(0);
  
  return (
    <>
      <div className='product-cart-container'>
        <Scrollbars>
        {
          allProducts && allProducts.map((product) => {
            return (<>
              <div className='food-item' key={product.foodId}>
                <div className='food-item__details'>
                  <img src={product.imgLink} alt="Product Image" />
                  <div className='food-description'>
                    <h3>{product.foodName}</h3>
                    <p> {product.description}</p>
                    <Rating value={product.rating} precision={0.5} readOnly />
                  </div>
                </div>
                <div>
                  {
                    product.quantity < 1 ?
                      <Button btnText="ADD" width={150} actionType={() => AddToCart(product)} />
                      :
                      <div className='food-add-remove-wrapper'>
                        <span onClick={() => AddToCart(product)}>-</span>
                        <strong className='curr-item-count'>{product.quantity}</strong>
                        <span onClick={() => AddToCart(product)}>+</span>
                      </div>
                  }
                </div>
              </div>
              <hr />
            </>)
          })
        }
      </Scrollbars>
      </div>
    </>
  )
}

export default ProductCard