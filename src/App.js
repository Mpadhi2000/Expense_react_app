import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
function App() {
let expense = [
  {
    id:'e1',
    title:'Car Insurance',
    amount: 300,
    date: new Date(2021,5,30)
  },
  {
    id:'e2',
    title:'Vehicle Expense',
    amount: 400,
    date: new Date(2021,5,24)
  },
  {
    id:'e3',
    title:'School Fee',
    amount: 200,
    date: new Date(2021,5,26)
  },
  {
    id:'e4',
    title:'Food',
    amount: 250,
    date: new Date(2021,5,12)
  }
];
  
  return (
    <div>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
