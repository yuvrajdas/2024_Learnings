export const reducer = (state, action)=>{
   
    if(action.type === 'REMOVE_ITEM'){
        let idx = state.items.findIndex((ele) => ele.id === action.payload);
        return{
            ...state,
            items:state.items.filter((rItem)=>rItem.id !== action.payload),
            totalAmount: parseInt(state.totalAmount) - parseInt(state.items[idx].price*state.items[idx].quantity),
            totalItem: state.totalItem - state.items[idx].quantity,
        }
    }

    if (action.type === 'ADD_TO_CRAT') {
        let idx = state.items.findIndex((ele) => ele.id === action.payload.id);
     
        if (idx !== -1) {
            const updatedItems = [...state.items];
            updatedItems[idx] = {
                ...updatedItems[idx],
                quantity: updatedItems[idx].quantity + 1
            };
            return {
                ...state,
                totalAmount: parseInt(state.totalAmount) + parseInt(action.payload.price),
                totalItem: state.totalItem + 1,
                items: updatedItems
            };
        } 
    }

    if (action.type === 'REMOVE_FROM_CART') {
        let idx = state.items.findIndex((ele) => ele.id === action.payload.id);
     
        if (idx !== -1) {
            const updatedItems = [...state.items];
            updatedItems[idx] = {
                ...updatedItems[idx],
                quantity: updatedItems[idx].quantity -1
            };
            return {
                ...state,
                totalAmount: parseInt(state.totalAmount) - parseInt(action.payload.price),
                totalItem: state.totalItem -1,
                items: updatedItems
            };
        } 
    }
 
    return state;
}