import React , { createContext , useContext , useState } from 'react'


export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext);


export const AuthContextProvider = ({children}) => {
    const initialToken = sessionStorage.getItem('token');
    const initialLocalId = sessionStorage.getItem('id');
    const [items, setItems]=useState([])

    const [userDetails, setUserDetails] = useState({
        token: initialToken,
        isLoggedIn: initialToken ? true : false,
        localId: initialLocalId,
        email: ''
    })
    
    const OnAddingExpense = (expenses, key) => {
        const items = {
          ...expenses,
          year: (new Date(expenses.date)).getFullYear(),
          id: userDetails.localId,
          key
        }
        setItems((prev) => [items, ...prev])
      }

      const logInHandler = (data) => {
        sessionStorage.setItem('token', data.idToken)
        sessionStorage.setItem('id', data.localId)
        setUserDetails({
            token: data.idToken,
            isLoggedIn: true,
            localId: data.localId,
            email: data.email
        })
     
      }
      const logOutHandler = () => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('id')
            setUserDetails({
                token: null,
                isLoggedIn: false,
                localId: '',
                email: ''
            })
        }

    return (
        <AuthContext.Provider value={{
            items,
            setItems,
            OnAddingExpense,
            userDetails,
            setUserDetails,
            logInHandler,
            logOutHandler
        }}>
                {children}
        </AuthContext.Provider>
    )
}





