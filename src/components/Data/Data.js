
import {useState, useCallback } from "react"
import axios from 'axios';

export const useData = ( ) => {
    const [data, setData] = useState([])
    const [accountCreated, setAccountCreated] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const sendRequest = useCallback(async(setFunc) => {
        try{
          const itemData = []
          setLoading(true)
          const {data} = await axios.get("https://expense-app-523df-default-rtdb.firebaseio.com/expenses.json")
        
          for(let key in data) {
            itemData.push({
              id: data[key].id,
              date: data[key].date,
              expenseName: data[key].expenseName,
              cost: data[key].cost,
              year: new Date(data[key].date).getFullYear(),
              key
            })
          }
          setLoading(false)
          setData(itemData)
          setFunc(itemData)
      }catch(err) {
        new Error('something wrong')
        setLoading(false)
        setError(err.message)
      }
    },[])

    const deleteData = async(itemId) => {
        try {
            setLoading(true)
            await axios.delete(`https://expense-app-523df-default-rtdb.firebaseio.com/expenses/${itemId}.json`)
            setLoading(false)
        } catch(err) {
            new Error('something wrong')
            setLoading(false)
            setError(err.message)
          }
    }

   

    const signUp = async(inputData) => {
      try {
        setLoading(true)
        setAccountCreated(false)
        await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAjfZKtUF8DhNBFVf2Z1eSY97MnKXsY30A" , {
          ...inputData
        })
        
        setLoading(false)
        setAccountCreated(true)
      }
      catch(err) {
        setLoading(false)
        setError("Account creation failed! try with different email and password")
      }
    }

    const authLogIn = async(inputData) => {
      try {
        setLoading(true)
        const {data} = await axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAjfZKtUF8DhNBFVf2Z1eSY97MnKXsY30A", {
          ...inputData
        })
        setLoading(false)
        return data;
      }catch(err) {
      
        setLoading(false)
        setError("Login failed!")
      }
    }
   

return {
    data,
    loading,
    error,
    sendRequest,
    deleteData,
    accountCreated,
    signUp,
    authLogIn
}
}

