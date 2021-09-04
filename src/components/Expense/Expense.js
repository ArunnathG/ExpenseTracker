import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../ContextProvider/AuthContext';
import ExpenseItem  from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useData } from '../Data/Data';
import Loader from '../Loader/Loader';

const Cost = styled.p`
  margin: 0 auto;
  width: 50%;
  padding: 10px;
`;



export const Error = styled.p`
  margin: 0 auto;
  width: 50%;
  padding: 10px;
  color: red;
`;

const Expense = () => {
  const { items, setItems, userDetails } = useAuthContext()
  const [filterValue, setFilterValue]=useState(2021)
  const [filteredItems, setFilteredItems]=useState([])

  
  const {loading, error, sendRequest, deleteData } = useData()

  
    useEffect(() => {
      const setFunc  = (data) => setItems(data) 
      sendRequest(setFunc)
    }, [setItems, sendRequest])

  useEffect(() => {
    let filteredItem = []
    if(items.length !==0 ) {
      const userItems = items.filter(({ id }) => { return id === userDetails.localId})
      filteredItem = userItems.filter(({ year }) => { return year === filterValue})
      setFilteredItems(filteredItem)
    }

  }, [filterValue, items, userDetails])
  
  
  const calculateCost = () => {
     const sum = filteredItems.reduce((acc, {cost }) => {
        acc = acc + Number(cost)
        return acc
      }, 0) 

      return `${sum}£`;
  }

  const deleteHandler = (itemId) => {
    
    deleteData(itemId)
      const excludeDeletedItems = items.filter(({ key }) => { return key !== itemId})
      setItems(excludeDeletedItems)
      setFilteredItems(excludeDeletedItems)
  }

    return (
        <>
        <ExpenseFilter filterValue={filterValue} setFilterValue={setFilterValue}></ExpenseFilter>
            {!loading && filteredItems?.map((items) => <ExpenseItem deleteHandler={deleteHandler} key={items.id} item={items}></ExpenseItem>)}
            {!loading && filteredItems.length !==0 && <Cost className="cost"> Total Expenses: {calculateCost()}</Cost>}
            {!loading && !error && filteredItems.length === 0 && <Cost className="cost">No items</Cost>}
            {!error && loading && <Loader />}
            {error && <Error>error in fetching data</Error>}
        </>
    )
}

export default Expense