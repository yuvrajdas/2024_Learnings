export const foodReducer = (state, action) => {
    let idx = state.allProducts.findIndex((ele) => ele === action.payload);
    if (idx !== -1) {
        let updatedProduct = [...state.allProducts]
        
        updatedProduct[idx] = {
            ...updatedProduct[idx],
            quantity: updatedProduct[idx].quantity + 1,
            sub_total: updatedProduct[idx].sub_total + action.payload.price
        } 
        
        let myUpdatedCart = [...state.myCart];
        let index = myUpdatedCart.findIndex((ele) => ele.foodId === action.payload.foodId);
        if (index !== -1) {
            // If the item is already in the cart, update its quantity
            myUpdatedCart[index] = {
                ...myUpdatedCart[index],
                quantity: myUpdatedCart[index].quantity + 1,
                sub_total: myUpdatedCart[index].sub_total + action.payload.price
            };
        } else {
            // If the item is not in the cart, add it
            myUpdatedCart.push(updatedProduct[idx]);
        }
        
        return {
            ...state,
            allProducts: updatedProduct,
            totalQuantity: state.totalQuantity + 1,
            totolAmount: state.totolAmount + action.payload.price,
            myCart: myUpdatedCart
        };
    }
    // Return the current state if the item is not found
    return state;
}