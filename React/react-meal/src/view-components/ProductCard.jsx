import React from 'react'
import '../css/ProductCart.css';
import { useState } from 'react';
import Button from '../generic-components/Button';
const ProductCard = () => {
  const [item, setItem] = useState(0);
  return (
    <>
      <div className='product-cart-container'>
        <div className='food-item'>
          <img src="https://t4.ftcdn.net/jpg/02/84/46/89/360_F_284468940_1bg6BwgOfjCnE3W0wkMVMVqddJgtMynE.jpg" alt="" />
          <div>
            <h3>Food Name</h3>
            <p>Fresh, flavorful meals delivered to your door from experienced chefs</p>
          </div>
          <div>
            {
              item < 1 ?
                <Button btnText="ADD" actionType={()=>setItem(item+1)} />
              :
                <div className='food-add-remove-wrapper'>
                  <span onClick={()=>setItem(item-1)}>-</span>
                  <strong>{item}</strong>
                  <span onClick={()=>setItem(item-1)}>+</span>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductCard