import ExpenseItem from './ExpenseItem';
import Card from './Card';

import "./Expenses.css"


function Expenses(props) {
  return (
    <Card className="expenses">
        <ExpenseItem
            date={props.mockData[0].date}
            amount={props.mockData[0].purchase_amount}
            points={props.mockData[0].reward_points}
        />
    </Card>
  );
}


export default Expenses;