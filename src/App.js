// import react from 'react';
import { mockData } from "./components/mockData";

import Expenses from "./components/Expenses/Expenses";
// import NewExpense from "./components/NewExpense.js/NewExpense";

function App() {
 

  // const addExpenseHandler = (expense) => {
  //   console.log("In app.js");
  //   console.log(expense);
  // };

  return (
    <div>
      {/* <NewExpense onAddExpense={addExpenseHandler} /> */}
      <Expenses mockData={ mockData } />
    </div>
  );
}

export default App;
