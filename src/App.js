import React  from 'react';
import './App.css';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm'
import Expense from './components/Expense/Expense';


const App = () => {
    console.log('theree')
  return(
    <>
      <NewExpenseForm />
      <Expense />
    </>
  )};

export default App;
