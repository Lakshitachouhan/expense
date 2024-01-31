import React from "react";
import Listgroup from "./components/Listgroup";
import Navbar from "./components/Navbar";
import Mainsection from "./components/Mainsection";
import Balance from "./components/Balance";
import { ExpenseProvider } from "./context/Expensecontext";

const App = () => {
  return (
    <ExpenseProvider>
      <Navbar/>
      <div className="container">
        <Mainsection/>
        <Balance/>
        <Listgroup />
      </div>
    </ExpenseProvider>
  );
};

export default App;
