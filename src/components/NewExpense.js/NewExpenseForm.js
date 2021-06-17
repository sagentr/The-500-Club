import { useState } from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = () => {
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredPoints, setEnteredPoints] = useState('')
    const [enteredDate, setEnteredDate] = useState('');

//    const [userInput, setUserInput] = useState({
//         enteredAmount: '',
//         enteredPoints: '',
//         enteredDate: '',
//     });

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);

        // setUserInput({
        //     ...userInput,
        //      enteredAmount: event.target.value,
           
        // });

        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmoung: event.target.value}
        // })
    };

    const pointsChangeHandler = (event) => {
        setEnteredPoints(event.target.value);
        // setUserInput({
        //     ...userInput,
        //      enteredPoints: event.target.value,
        //  });
    }       

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //      enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            amount: enteredAmount,
            points: enteredPoints,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        setEnteredAmount('');
        setEnteredPoints('');
        setEnteredDate('');
        
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Purchase Amount</label>
                    <input 
                    type="text"
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Reward Points</label>
                    <input
                    type="number"
                    min="0.01"  step="0.01"
                    value={enteredPoints}
                    onChange={pointsChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date"
                    min="2019-0--01" max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense_actions">
            <button type="submit">Add Expense</button></div>
        </form>
    )
}

export default NewExpenseForm;