import './css/App.css';
import Header from './layout/Header'
import ProductCard from './view-components/ProductCard';
import { products } from './products';
import { createContext, useReducer } from 'react';
import { foodReducer } from './reducer/foodReducer';

export const DataContext = createContext();
const initialState = {
  allProducts: products,
  totolAmount: 0,
  totalQuantity: 0,
  rowAmount: 0,
  rowQuantity: 0,
  mycart: [],
}

function App() {
  const [state, dispatch] = useReducer(foodReducer, initialState);
 
  const AddToCart= (item)=>{
      return dispatch({
        type:'ADD_TO_CART',
        payload:item
      })
  }

  return (
    <>
      <DataContext.Provider value={{state, AddToCart}}>
        <Header />
        <ProductCard />
      </DataContext.Provider>
    </>
  );
}

export default App;
