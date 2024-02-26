import React, { useReducer, useState } from "react";
import './Cart.css'
import { products } from "./products";
import { createContext } from "react";
import ContextCart from "./ContextCart";
import { reducer } from './reducer' 
export const CartContext = createContext();
const initialState = {
    items:products,
    totalAmount: 0,
    totalItem: 0,
}
const Cart = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const removeProduct = (id)=>{
      return dispatch({
        type:'REMOVE_ITEM',
        payload:id
       })
    }

    const addMoreProduct = (item)=>{
        return dispatch({
            type:'ADD_TO_CRAT',
            payload:item
        })
    }

    const removeProductFromCart = (item)=>{
       if(item.quantity<1 || state.totalItem<1){
        return;
       }
        return dispatch({
            type:'REMOVE_FROM_CART',
            payload:item
        })
    }
    return (
        <CartContext.Provider value={{state, removeProduct, addMoreProduct, removeProductFromCart}}>
            <ContextCart/>
        </CartContext.Provider>
    )
}

export default Cart;