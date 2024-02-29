export const foodReducer = (state, action) => {

    let idx = state.allProducts.findIndex((ele) => ele.foodId === action.payload.foodId);

    if (action.type === 'ADD_TO_CART') {

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
    }

    if (action.type === 'REMOVE_FROM_CART') {

        if (idx !== -1) {
            let updatedProduct = [...state.allProducts]

            updatedProduct[idx] = {
                ...updatedProduct[idx],
                quantity: updatedProduct[idx].quantity - 1,
                sub_total: updatedProduct[idx].sub_total - action.payload.price
            }
        
            let myUpdatedCart = [...state.myCart];
            let index = myUpdatedCart.findIndex((ele) => ele.foodId === action.payload.foodId);
            if (index !== -1) {
                // If the item is already in the cart, update its quantity
                myUpdatedCart[index] = {
                    ...myUpdatedCart[index],
                    quantity: myUpdatedCart[index].quantity - 1,
                    sub_total: myUpdatedCart[index].sub_total - action.payload.price
                };
            }

            return {
                ...state,
                allProducts: updatedProduct,
                totalQuantity: state.totalQuantity - 1,
                totolAmount: state.totolAmount - action.payload.price,
                myCart: myUpdatedCart
            };
        }
    }

    if(action.type === 'MASTER_DELETE'){ 
        console.log(action.payload);
        if (idx !== -1) {
            alert("masg")
            let updatedProduct = [...state.allProducts]

              
            let orignalCart = [...state.myCart];
            let index = orignalCart.findIndex((ele) => ele.foodId === action.payload.foodId);
            // let myUpdatedCart = orignalCart.filter((ele) => ele.foodId !== action.payload.foodId)
           
            console.log(orignalCart);
            if (index !== -1) {  
                orignalCart[index] = {
                    ...orignalCart[index],
                    quantity: 0,
                    sub_total: 0
                };
                // splicedItem =  orignalCart.splice(index, 1);
            }

            return {
                ...state,
                allProducts: updatedProduct,
                totalQuantity: state.totalQuantity - (state.myCart[index].quantity),
                totolAmount: state.totolAmount - (state.myCart[index].sub_total),
                myCart: orignalCart
            };
        }
    }


    // Return the current state if the item is not found
    return state;
}