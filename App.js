//import logo from './logo.svg';
import "./App.css";
// import Navbar from "./components/Component/Navbar";
// import Textform from "./components/Component/Textform";
import NewExpenses from "./components/Component/NewExpenses/NewExpenses";
import ExpenceItems from "./components/Expenses/ExpenceItems";
import ExpenseDetails from "./components/Expenses/ExpenseDetails";


// function App(){
   
//   // return (


//   // <>
//   // <Navbar title = "TextUtiles" about="About Text"></Navbar>
//   // <div className="container my-3">
//   //   <Textform heading="Enter your Text to analyze"/>
//   // </div>
//   // {/* <Navbar/> */}
//   // {/* <NewComponent /> */}
//   // </>
  
    
//   // );
// }



function App() {
  const expences = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 125.9,
      date: new Date(2024, 2, 1),
      location: "Mumbai",
    },
    {
      id: "e2",
      title: "Some Thing new",
      amount: 100.9,
      date: new Date(2024, 2, 2),
      location: "Pune",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 180.9,
      date: new Date(2024, 2, 3),
      location: "Sangali",
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 290.9,
      date: new Date(2024, 2, 4),
      location: "Akola",
    },
  ];
  return (
    // <div>
    //   <NewExpenses />
    //   <expences items={expences}></expences>
    // </div>


    <div className="App">
      <h1>Let's get Start</h1>
      <NewExpenses />
      <div className="container">
      
          {expences.map((expence, index) => (
        <ExpenceItems
          key={index}
          // {...expence}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
          location={expence.location}
        />
      ))} 
      </div>
   

     {/* <ExpenseDetails /> */}
   </div>
  // );
  )
   
}
export default App
