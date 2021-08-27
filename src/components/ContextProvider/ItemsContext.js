import React , { createContext , useContext , useState } from 'react'

export const ItemsContext = createContext({})

export const useItemsContext = () => useContext(ItemsContext);


export const ItemsContextProvider = ({children}) => {
    const [items, setItems]=useState([])

    const OnAddingExpense = (expenses,id) => {
        const items = {
          ...expenses,
          year: (new Date(expenses.date)).getFullYear(),
          id
        }
        setItems((prev) => [items, ...prev])
      }

    return (
        <ItemsContext.Provider value={{
            items,
            setItems,
            OnAddingExpense
        }}>
                {children}
        </ItemsContext.Provider>
    )
}





