import React from "react";

import ExpensesForm from "./ExpensesForm";
import './NewExpenses.css';

const NewExpenses = () =>{
    return ( 
    <div className="new_expense">
        <ExpensesForm />
    </div>
    )
}
export default NewExpenses;