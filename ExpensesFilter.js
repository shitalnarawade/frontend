import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter =(props) =>{
    
        const dropdownChangeHandler = (event)=>{
              props.onChangeFilter(event.target.value)
        }
        return(
            <div className="expenses-filter">
                <div className="expenses-filter__control">
                     <lable> Filter By </lable>
                     <select name="" id="" value={props.selected} onChange={dropdownChangeHandler}>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                     </select>
                </div>
            </div>
        )
}
export default ExpensesFilter;