import React from "react";
import ExpanceDate from "./ExpenceDate";
import Card from '../UI/Card' 
import ExpenseDetails from "./ExpenseDetails";

// import Card from '../UI/Card.css';
import './ExpenceItems.css'

const ExpenceItems=(props) =>{

  const clickedHandle = ()=>{
    console.log('Clicked!!!');
  }
  const deleteExpances =()=>{
    console.log('DeleteClicked!!!');
  }


  return (
    <>
    <Card className="expense-item">
      
      <div className="expense-item__description">
      <ExpanceDate date={props.date} />
      {/* <ExpenseDetails amount={props.amount} title={props.title} /> */}
      <h2>{props.title} </h2>
      <div className="expense-item__price">{props.amount}</div>
      <div className="expense-item__location">{props.location}</div>
      <button onClick={clickedHandle}>Change Title</button>
      <button onClick={deleteExpances}>Dele Expance</button>
      </div>
      
    </Card>
    </>
  );
}
export default ExpenceItems;
