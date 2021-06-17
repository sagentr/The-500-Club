import  React  from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';


const ExpenseItem = (props) => {

  return (
    <Card className="expense-item">
       <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__purchase">
        <h2 className="expense-item">{props.amount}</h2> 
        </div>
      <div className="expense-item__points">{props.points}</div>
     
    </Card>
  );
}

export default ExpenseItem;
