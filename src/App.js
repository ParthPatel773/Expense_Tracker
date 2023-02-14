import React, { useState } from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let DUMMY_EXPENSE = 
[
  {
    id: 'e1',
    title: 'school fee',
    amount: 250,
    date: new Date(2021, 5, 12)
  },
  {
    id: 'e2',
    title: 'Books',
    amount: 200,
    date: new Date(2021, 2, 24)
  },
  {
    id: 'e3',
    title: 'House rent',
    amount: 750,
    date: new Date(2021, 4, 17)
  },
  {
    id: 'e4',
    title: 'Food',
    amount: 550,
    date: new Date(2021, 1, 3)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  //API_Fetch

  // fetch("http://localhost/sample-api/api/read.php")
  //   .then((reponse) => {
  //     return Response.json();
  //   })
  //   .then((data) => {
  //     console.log(data);
  //     setExpenses(data);
  //   });

  // let expenses = [
  //   {
  //     id: 'e1',
  //     title: 'school fee',
  //     amount: 250,
  //     date: new Date(2021, 5, 12)
  //   },
  //   {
  //     id: 'e2',
  //     title: 'Books',
  //     amount: 200,
  //     date: new Date(2021, 2, 24)
  //   },
  //   {
  //     id: 'e3',
  //     title: 'House rent',
  //     amount: 750,
  //     date: new Date(2021, 4, 17)
  //   },
  //   {
  //     id: 'e4',
  //     title: 'Food',
  //     amount: 550,
  //     date: new Date(2021, 1, 3)
  //   }
  // ];

  const addExpenseHandler = (expense) => {
    // console.log(expense);

    const updatedExpese = [expense, ...expenses];
    setExpenses(updatedExpese);
  };

  return (
    <div>
      {/* <h2> Let's get started</h2> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
