import React , { useState} from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useItemsContext } from '../ContextProvider/ItemsContext';
import './NewExpenseForm.css'
import InputField  from '../InputField/InputField';
import Button from '../Button/Button';

const Form = styled.form`
    margin: 0 auto;
    border: 0.5px solid #888888;;
    padding: 10px;
    box-shadow: 5px 10px #888888;
    margin-top: 10px;
    @media (min-width: 768px) {
        width: 80%;
        padding: 30px;
     }
`

const NewExpenseForm = () => {
    const { OnAddingExpense } = useItemsContext()
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
                    { ...initialFormValues }
                )
                OnAddingExpense(initialFormValues, data.name)
            }
           catch(err) {
               throw new Error('something wrong!!')
           }
          
          
            setFormValues({
                date: '',
                expenseName: '',
                cost:  ''
            })
            
    }

    return (
        <Form onSubmit={submitHandler} >
             <label className="label">Date:</label>
            <InputField value={initialFormValues.date} type="date" onChange={setDate}></InputField>
            <label className="label">Expense Name:</label>
            <InputField className="input" value={initialFormValues.expenseName} type="text" onChange={setExpense}></InputField>
            <label className="label">Cost:</label>
            <InputField className="input" value={initialFormValues.cost} placeholder="£" type="number" onChange={setCost}></InputField>
        
       
      
        <Button type="submit">Add an Expense</Button>
    </Form>
    )
   
}

export default NewExpenseForm;