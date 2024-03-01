const initialState = {
    name:'unknown',
    arr:['a', 'b', 'c']
}
const Reducer = (state = initialState, action)=>{
    if(action.type === 'UPDATE'){
        return{
            ...state,
            name:action.payload
        }
    }
    return state;
}

export default Reducer;