import React  from 'react';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm'
import Expense from './components/Expense/Expense';


const App = () => {
  return(
    <>
      <NewExpenseForm />
      <Expense />
    </>
  )};

export default App;
