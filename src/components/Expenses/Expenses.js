import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

import { useState } from "react";

function Expenses(props) {
  const [filteredMonth, setFilteredMonth] = useState("06");

  const filterChangeHandler = (selectedMonth) => {
    setFilteredMonth(selectedMonth);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredMonth}
          onChangeFilter={filterChangeHandler}
        />
        {props.mockData.map((expense) => (
          <ExpenseItem
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
