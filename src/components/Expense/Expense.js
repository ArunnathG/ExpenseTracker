import React , {useState, useEffect} from 'react';
import './Expense.css';
import { useItemsContext } from '../ContextProvider/ItemsContext';
import ExpenseItem  from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import { useGetData } from '../Data/Data';
import Loader from '../Loader/Loader';

const Expense = () => {
  const { items, setItems } = useItemsContext()
  const [filterValue, setFilterValue]=useState(2021)
  const [filteredItems, setFilteredItems]=useState([])


  const {loading, error, sendRequest, deleteData } = useGetData()

 const setFunc  = (data) => setItems(data) 

    useEffect(() => {
      sendRequest(setFunc)
    }, [])

  useEffect(() => {
    let filteredItem = []
    
    if(items.length !==0 ) {
     
      filteredItem = items.filter(({ year }) => { return year === filterValue})
      setFilteredItems(filteredItem)
    }

  }, [filterValue, items])
  
  
  const calculateCost = () => {
     const sum = filteredItems.reduce((acc, {cost }) => {
        acc = acc + Number(cost)
        return acc
      }, 0) 

      return `${sum}£`;
  }

  const deleteHandler = (itemId) => {
    deleteData(itemId)
      const excludeDeletedItems = items.filter(({ id }) => { return id !== itemId})
      setItems(excludeDeletedItems)
      setFilteredItems(excludeDeletedItems)
  }

    return (
        <>
        <ExpenseFilter filterValue={filterValue} setFilterValue={setFilterValue}></ExpenseFilter>
            {!loading && filteredItems?.map((items) => <ExpenseItem deleteHandler={deleteHandler} key={items.id} item={items}></ExpenseItem>)}
            {!loading && filteredItems.length !==0 && <p className="cost"> Total Expenses: {calculateCost()}</p>}
            {!loading && !error && filteredItems.length === 0 && <p className="cost">No items</p>}
            {!error && loading && <Loader />}
            {error && <p>error...</p>}
        </>
    )
}

export default Expense