import React from "react";
import './ExpensesForm.css';

const ExpensesForm = ()=>{

    const onChangeHandler = (event) =>{
        console.log(event.target.value)
    }


       return (
       <>
        <form className="container rm-bg-colour">
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={onChangeHandler } />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step ="0.01" />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min = "2019-01-01" max="2024-12-12" />
                </div>

            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expences</button>
            </div>
        </form>
       </>
       );
}
export default ExpensesForm;