import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
  

  return (
    <div className="expense-item">
       <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__amount">
        <h2>{props.amount}</h2>
      </div>
      <div className="expense-item__points">{props.points}</div>
    </div>
  );
}

export defa