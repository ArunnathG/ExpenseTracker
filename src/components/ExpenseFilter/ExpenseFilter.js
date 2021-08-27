import React from "react";
import './ExpenseFilter.css';
import {generateYears, labels } from '../Utilities/Constant'

const ExpenseFilter = ({setFilterValue, filterValue}) => {
    
    return(
        <div className="filterContainer">
            <label className="filterYear">{labels.filteryear}</label>
            <select className="dropDown" value={filterValue} onChange={(event) => setFilterValue(Number(event.target.value))}>
                {generateYears().map((year) => {
                    return (
                        <option key={year} value={year}>
                            { year}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default ExpenseFilter;