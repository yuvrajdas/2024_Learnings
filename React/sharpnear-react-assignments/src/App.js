 
import './App.css';
import ExpenceDetails from './ExpenceDetails';
import HeaderExpence from './HeaderExpence';

function App() {
  return (
     <>
      <HeaderExpence amount={1000} location="Raigarh" title="Expence Details" date={new Date().toDateString()}  />
     </>
  );
}

export default App;
