import React from "react";
import styled from 'styled-components';
import {generateYears, labels } from '../Utilities/Constant'

const FilterContainer = styled.div`
    width: 50%;
    padding: 10px;
    margin: 0 auto;
    margin-top: 20px;
`;

const FilterYear = styled.label`
    font-size: 25px;
`

const DropDown = styled.select`
    padding: 10px;
    width: 100%;
    margin-top: 15px;
    font-size: 20px;
`

const ExpenseFilter = ({setFilterValue, filterValue}) => {
    
    return(
        <FilterContainer>
            <FilterYear>{labels.filteryear}</FilterYear>
            <DropDown value={filterValue} onChange={(event) => setFilterValue(Number(event.target.value))}>
                {generateYears().map((year) => {
                    return (
                        <option key={year} value={year}>
                            { year}
                        </option>
                    )
                })}
            </DropDown>
        </FilterContainer>
    )
}

export default ExpenseFilter;