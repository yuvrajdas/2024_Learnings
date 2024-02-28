import './css/App.css';
import Header from './layout/Header'
import ProductCard from './view-components/ProductCard';
import { products } from './products';
import { createContext, useReducer } from 'react';
import { foodReducer } from './reducer/foodReducer';

let res = products.map((prod) => {
  return {
    ...prod,
    quantity: 0,
    sub_total: 0
  }
})
export const DataContext = createContext();
const initialState = {
  allProducts: res,
  totolAmount: 0,
  totalQuantity: 0,
  myCart: []
}

function App() {
  const [state, dispatch] = useReducer(foodReducer, initialState);

  const AddToCart = (item) => {
    return dispatch({
      type: 'ADD_TO_CART',
      payload: item
    })
  }

  return (
    <>
      <DataContext.Provider value={{ state, AddToCart }}>
        <Header />
        <ProductCard />
      </DataContext.Provider>
    </>
  );
}

export default App;
