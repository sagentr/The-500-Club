import  React, { useState } from 'react';

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';


const ExpenseItem = (props) => {

  const [amount, setAmount] = useState(props.amount)


const clickHandler = () => {
  setAmount('Updated!')
 console.log(amount);
}
  return (
    <Card className="expense-item">
       <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__amount">
        <h2>{amount}</h2>
      
      <div className="expense-item__points">{props.points}</div>
      </div>
      <button onClick={clickHandler}>Change Amount</button>
    </Card>
  );
}

export default ExpenseItem;
