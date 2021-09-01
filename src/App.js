import React  from 'react';
import Header from './components/Header/Header';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm'
import Expense from './components/Expense/Expense';
import DocumentHead from './components/DocumentHead/DocumentHead';


const App = () => {
  return(
    <>
    <GlobalStyle />
      <DocumentHead />
      <Header />
      <NewExpenseForm />
      <Expense />
      </>
  )};

export default App;
