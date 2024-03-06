import "./ExpenceItems.css";

const ExpenseDetails =(props)=>{
  return (
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
  );
}

// function ExpenseDetails({title,amount}) {
//     return (
//         <div className="expense-item__description">
//           <h2>{title}</h2>
//           <div className="expense-item__price">${amount}</div>
//         </div>
//     );
//   }


export default ExpenseDetails;
