import ExpensesFilter from "../Component/NewExpenses/ExpensesFilter";
import ExpenceItems from "./ExpenceItems";



const Expences = props =>{
    const [filterYear, setFilterYear] = useState(2020)
}
const filterChangeHandler =() => {
    setFilterYear(selectedYear);
}
return(
    <div>
        <card className='expenses'>
            <ExpensesFilter selected={filterYear} onChange={filterChangeHandler}></ExpensesFilter>
            <ExpenceItems>
                title = {props.items[0].title},
                amount = {props.items[0].amount},
                date = {props.items[0].date},
            </ExpenceItems>
            <ExpenceItems>
                title = {props.items[1].title},
                amount = {props.items[1].amount},
                date = {props.items[1].date},
            </ExpenceItems>
            <ExpenceItems>
                title = {props.items[2].title},
                amount = {props.items[2].amount},
                date = {props.items[2].date},
            </ExpenceItems>
        </card>
    </div>
)