import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";


function ExpenseItem(props) {
  

  return (
    <Card className="expense-item">
       <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__amount">
        <h2>{props.amount}</h2>
      </div>
      <div className="expense-item__points">{props.points}</div>
    </Card>
  );
}

export default ExpenseItem;
