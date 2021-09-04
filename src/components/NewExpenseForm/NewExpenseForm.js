import React , { useState , useEffect} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useAuthContext } from '../ContextProvider/AuthContext';
import InputField  from '../InputField/InputField';
import Button from '../Button/Button';

const Form = styled.form`
    font-family: Arial, Helvetica, sans-serif;
    margin: 0 auto;
    border: 0;
    padding: 10px;
    box-shadow: 2px 7px 10px #888888;
    margin-top: 10px;
    @media (min-width: 768px) {
        width: 80%;
        padding: 30px;
     }
`

export const Label = styled.label`
    width: 70%;
    display: block;
   
    margin: 10px;
`

const NewExpenseForm = () => {
    const { OnAddingExpense , userDetails , autoLogOutEnabled, logOutHandler } = useAuthContext()
        const [remainingTime, setRemainingTime] = useState(10)
    
    useEffect(() => {
        // Timer to indicate auto log out
        setTimeout(() => {
            if(autoLogOutEnabled && remainingTime > 0) {
                setRemainingTime(remainingTime - 1)
            }
            if(remainingTime === 0) {
                logOutHandler()
            }
        },1000)
    }, [autoLogOutEnabled, remainingTime, logOutHandler])

    const [initialFormValues, setFormValues] = useState({
        date: '',
        expenseName: '',
        cost:  ''
    })

    const setDate = (event) => {
            setFormValues((prev) => { 
                return { ...prev,  date: event.target.value} 
            })
    }

    const setExpense = (event) => {
        setFormValues((prev) => { 
            return { ...prev,  expenseName: event.target.value} 
        })
    }


    const setCost = (event) => {
        setFormValues((prev) => { 
            return { ...prev,  cost: event.target.value} 
        })
    }

    const submitHandler = async(event) => {
            event.preventDefault()
            if(initialFormValues.date && initialFormValues.expenseName && initialFormValues.cost)
           
            try {
                const {data } = await axios.post("https://expense-app-523df-default-rtdb.firebaseio.com/expenses.json", 
                    { ...initialFormValues, id: userDetails.localId }
                )
                setFormValues({
                    date: '',
                    expenseName: '',
                    cost:  ''
                })
                
                OnAddingExpense(initialFormValues, data.name)
            }
           catch(err) {
               throw new Error('something wrong!!')
           }
            
    }

    return (
        <Form onSubmit={submitHandler} >
             {autoLogOutEnabled && <h1>Logging off in {remainingTime} seconds</h1>}
             <Label>Date:</Label>
            <InputField value={initialFormValues.date} type="date" onChange={setDate}></InputField>
            <Label>Expense Name:</Label>
            <InputField value={initialFormValues.expenseName} type="text" onChange={setExpense}></InputField>
            <Label>Cost:</Label>
            <InputField  value={initialFormValues.cost} placeholder="£" type="number" onChange={setCost}></InputField>
        
       
      
        <Button type="submit">Add an Expense</Button>
    </Form>
    )
   
}

export default NewExpenseForm;