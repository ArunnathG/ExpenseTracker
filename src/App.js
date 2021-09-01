import React  from 'react';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm'
import Expense from './components/Expense/Expense';


const App = () => {
  return(
    <>
    <GlobalStyle />
      <NewExpenseForm />
      <Expense />
      </>
  )};

export default App;
