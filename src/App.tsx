import React, { useState } from "react";
import ExpensesTable from "./components/ExpensesTable";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "gold", amount: 20, category: "metals" },
    { id: 2, description: "silver", amount: 10, category: "metals" },
    { id: 3, description: "bronze", amount: 5, category: "metals" },
    { id: 4, description: "platinum", amount: 50, category: "metals" },
  ]);

  return (
    <div>
      <ExpensesTable expenses={expenses} />
    </div>
  );
}

export default App;
