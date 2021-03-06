import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2019');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.item.map(expense => <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date} />)}


            </Card>
        </div>
    )
}
export default Expenses;