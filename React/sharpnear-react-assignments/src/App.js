 
import './App.css'; 
import ExpenseDetails from './Expense/ExpenseDetails';
import HeaderExpence from './HeaderExpence';

function App() {

  let expendeData = [
    {date: '14-07-2020', title:"Toilet Paper", amount:94.6 },
    {date: '15-07-2021', title:"New TV", amount:356 },
    {date: '16-07-2022', title:"Car Insurance", amount:430 },
    {date: '17-07-2023', title:"New Desk", amount:294.6 },
    {date: '18-07-2023', title:"Bike", amount:450 }
  ]
  return (
     <>
       <ExpenseDetails expenseData={ expendeData } />
      {/* <HeaderExpence amount={1000} location="Raigarh" title="Expence Details" date={new Date().toDateString()}  /> */}
     </>
  );
}

export default App;
