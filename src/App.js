import React  from 'react';
import { Route , Switch, Redirect } from 'react-router-dom'
import { useAuthContext } from './components/ContextProvider/AuthContext';
import LogIn from './pages/LogIn/LogIn';
import SignUp  from './pages/SignUp/SignUp';
import Header from './components/Header/Header';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import NewExpenseForm from './components/NewExpenseForm/NewExpenseForm'
import Expense from './components/Expense/Expense';
import DocumentHead from './components/DocumentHead/DocumentHead';


const App = () => {
  const { userDetails } = useAuthContext()
  const { token, isLoggedIn} = userDetails
  return(
    <>
        <GlobalStyle />
         <Header />
          <DocumentHead />
          
          <Switch>
          <Route path="/signUp">
                <SignUp />
            </Route>
           
             <Route path="/home">
               { token && isLoggedIn && (
                 <>
                  <NewExpenseForm />
                  <Expense />
                </>
               )}
               { !token && !isLoggedIn && (
                 <Redirect to="/"/>
               )}
                 
                </Route>
                <Route exact path="/">
                   <LogIn />
                </Route>
            <Route path="/*">
                <Redirect to="/"/>
            </Route>
          </Switch>
          
        </> 
    
  )};

export default App;
