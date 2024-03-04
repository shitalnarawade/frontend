import logo from './logo.svg';
import './App.css';
import ExpenceItems from './components/ExpenceItems';


function App() {
  const expences = [
    {
      id : 'e1',title : 'Toilet Paper', amount: 125.90, date : new Date(2024, 2, 1), city:'Mumbai'},
    {
      id : 'e2',title : 'Some Thing new', amount: 100.90, date : new Date(2024, 2, 2), city:'Pune'},
    {
      id : 'e3',title : 'Car Insurance', amount: 180.90, date : new Date(2024, 2, 3), city:'Sangali'},
    {
      id : 'e4',title : 'New Desk', amount: 290.90, date : new Date(2024, 2, 4),city:'Akola'},
 ]
  return (
    
  <div className ="App">
      {expences.map((expence, index) => (
        <ExpenceItems
          key={index}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
          city={expence.city}
        />
      ))}
   
    {/* <ExpenceItems 
    title={expence[0].title}
    amount={expence[0].amount} 
    date={expence[0].date}
    city ={expence[0].city}
    ></ExpenceItems>
    <ExpenceItems
    title={expence[1].title}
    amount={expence[1].amount} 
    date={expence[1].date}
    city ={expence[1].city}
    ></ExpenceItems>
    <ExpenceItems
    title={expence[2].title}
    amount={expence[2].amount} 
    date={expence[2].date}
    city ={expence[2].city}
    ></ExpenceItems>
    <ExpenceItems
    title={expence[3].title}
    amount={expence[3].amount} 
    date={expence[3].date}
    city ={expence[3].city}
    ></ExpenceItems> */}
     </div>
  );
}

export default App;
