import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  let state = useSelector(state=>state)
  let dispatch = useDispatch();
  console.log(state);
  const hello = ()=>{
     return async (dispatch)=>{
       let data = await fetch("https://jsonplaceholder.typicode.com/users/1")
       console.log(data);
       let jsonRes =  await data.json();
        dispatch({
          type:'UPDATE',
          payload:jsonRes.name
        })
     }
  }
  return (
    <div className="App">
       <div>
        {state.name}
       </div>
     <button onClick={() => dispatch(hello())}>Change</button>

    </div>
  );
}
export default App;
