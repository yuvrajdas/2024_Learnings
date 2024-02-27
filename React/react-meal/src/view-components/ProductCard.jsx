import React from 'react'
import '../css/ProductCart.css';
import { useState } from 'react';
import { Rating } from '@mui/material';
import Button from '../generic-components/Button';
import { Scrollbars } from 'react-custom-scrollbars-2';
import {products} from '../products.js'
const ProductCard = () => {
  console.log(products);
  const [item, setItem] = useState(0);
  const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) {
        return description;
    }
    return description.substr(0, maxLength) + '...';
  };
  return (
    <>
      <div className='product-cart-container'>
        <Scrollbars>
        {
          products.map((product) => {
            return (<>
              <div className='food-item' key={product.foodId}>
                <div className='food-item__details'>
                  <img src={product.imgLink} alt="Product Image" />
                  <div className='food-description'>
                    <h3>{product.foodName}</h3>
                    <p>{truncateDescription(product.description, 15)}</p>
                    <Rating value={product.rating} precision={0.5} readOnly />
                  </div>
                </div>
                <div>
                  {
                    item < 1 ?
                      <Button btnText="ADD" width={150} actionType={() => setItem(item + 1)} />
                      :
                      <div className='food-add-remove-wrapper'>
                        <span onClick={() => setItem(item - 1)}>-</span>
                        <strong className='curr-item-count'>{item}</strong>
                        <span onClick={() => setItem(item + 1)}>+</span>
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