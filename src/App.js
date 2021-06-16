import ExpenseItem from "./components/ExpenseItem";


function App() {
  const mockData = [
    {
      id: 1,
      date: new Date(2020, 7, 14),
      purchase_amount: "$65.65",
      reward_points: 3,
    },
    {
      id: 2,
      date: new Date(2020, 7, 14),
      purchase_amount: "$85.09",
      reward_points: 12,
    },
    {
      id: 3,
      date: new Date(2020, 7, 14),
      purchase_amount: "$47.93",
      reward_points: 51,
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        date={mockData[0].date}
        amount={mockData[0].purchase_amount}
        points={mockData[0].reward_points}
      />
    </div>
  );
}

export default App;
