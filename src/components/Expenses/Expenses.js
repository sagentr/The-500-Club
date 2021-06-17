import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";
import   { getPoints } from './RewardPoints';



function Expenses(props) {
  const [filteredMonth, setFilteredMonth] = useState("6");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };




  const filteredExpenses = props.mockData.filter(expense => {
    return expense.date.getMonth().toString() === filteredMonth
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredMonth}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            amount={expense.amount}
            points={getPoints(expense.amount)}
          />
        ))}

      </Card>
    </div>
  );
}

export default Expenses;
