import './ExpenceItems.css'

function ExpenceItems(props) {
    // const expanceDate = new Date(2024, 2 ,4);
    // const expanceTitle = 'Car Insurance';
    // const expenceAmount = '$100.90';
    // const LocationOfExpenditure = 'Akola';
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      <div className='expense-item__price'>${props.amount}</div>
      </div>
      <div className='expense-item__city'>{props.city}</div>
      </div>
  );
}
export default ExpenceItems;
