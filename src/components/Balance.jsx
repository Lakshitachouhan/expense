import React, { useContext } from "react";
import Expensecontext from "../context/Expensecontext";

const Balance = () => {
  const { transaction } = useContext(Expensecontext);
  const income = transaction
    .filter((current) => {
      return current.amount > 0;
    })
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);
  const expense = transaction
    .filter((expense) => {
      return expense.amount < 0;
    })
    .reduce((p, c) => {
      return p + c.amount;
    }, 0);
  return (
    <>
      <div className="balance-section">
        <div className="balanceleft">
          <h1>Total balance</h1>
          <p id="bounce">₹{income}</p>
        </div>
        <div className="balanceright">
          <h1>Current Expense</h1>
          <p id="bounce">₹{expense}</p>
        </div>
      </div>
    </>
  );
};

export default Balance;
