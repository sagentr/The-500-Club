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
      <div>
        <title>
          <h2>Welcome, take a look at your reward points</h2>
          </title>
      </div>

      <div>
        <Expenses mockData={mockData} />
      </div>
    </div>
  );
}

export default App;
