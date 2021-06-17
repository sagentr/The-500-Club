import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

import { useState } from "react";

function Expenses(props) {
  const [filteredMonth, setFilteredMonth] = useState("6");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };


  //https://www.w3schools.com/jsref/jsref_getmonth.asp
  //https://www.w3schools.com/jsref/jsref_getutcmonth.asp
  //https://www.w3schools.com/jsref/jsref_tolocalestring.asp
  //https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd
  //Could the problem also be how I am storying my months as values and then referencing them against the data object method?
  // Are they the same data type? What is it expecting?
  


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
            points={expense.points}
          />
        ))}
        {/* <ExpenseItem
          date={props.mockData[0].date}
          amount={props.mockData[0].purchase_amount}
          points={props.mockData[0].reward_points}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
