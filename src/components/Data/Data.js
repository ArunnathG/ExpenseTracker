
import {useState, } from "react"
import axios from 'axios';

export const useGetData = ( ) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const sendRequest = async(setFunc) => {
        try{
          const itemData = []
          setLoading(true)
          const {data} = await axios.get("https://expense-app-523df-default-rtdb.firebaseio.com/expenses.json")
          for(let key in data) {
            itemData.push({
              id: key,
              date: data[key].date,
              expenseName: data[key].expenseName,
              cost: data[key].cost,
              year: new Date(data[key].date).getFullYear()
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
    }

    const deleteData = async(itemId) => {
       console.log('delte', itemId)
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

   

return {
    data,
    loading,
    error,
    sendRequest,
    deleteData
}
}

