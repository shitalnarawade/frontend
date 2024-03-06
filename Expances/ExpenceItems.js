import React from "react";
import ExpanceDate from "./ExpenceDate";

import ExpenseDetails from "./ExpenseDetails";

import "../Expances/ExpenceItems";
import Card from '../UI/Card.css';

const ExpenceItems=(props) =>{
  return (
    <card className="expense-item">
      <ExpanceDate date={props.date} />

      <ExpenseDetails amount={props.amount} title={props.title} />
      <div className="expense-item__location">{props.location}</div>
    </card>
  );
}
export default ExpenceItems;
