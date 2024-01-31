import React, { useContext, useEffect, useState } from "react";
import Expensecontext from "../context/Expensecontext";
import { savetransaction, updatetransaction } from "../context/Expenseaction";

const Mainsection = () => {
  const { transaction, edit, dispatch } = useContext(Expensecontext);
  const balance = transaction.reduce((p, c) => {
    return p + c.amount;
  }, 0);

  const [text, settext] = useState("");
  const [amount, setamount] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (edit.editmode) {
      const data = updatetransaction({
        id: edit.transaction.id,
        text: text,
        amount: +amount,
      });
      dispatch({
        type: "UPDATE",
        payload: data,
      });
    } else {
      const data = savetransaction(text, amount);
      dispatch({
        type: "SAVE",
        payload: data,
      });
    }

    settext("");
    setamount("");
  };

  useEffect(() => {
    settext(edit.transaction.text);
    setamount(edit.transaction.amount);
  }, [edit]);

  // useEffect(() => {
  //   settext(edit.transaction.text);
  //   setamount(edit.transaction.amount);
  // }, [edit]);

  return (
    <>
      <div className="main-section">
        <div className="mainleft">
          <h1>Current Balance</h1>
          <p id="bounce">₹{balance}</p>
        </div>

        <form onSubmit={handlesubmit} className="mainright">
          <input
            type="text"
            value={text}
            onChange={(e) => settext(e.target.value)}
            placeholder="enter your transaction"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setamount(e.target.value)}
            placeholder="₹enter amount"
          />

          <button>save</button>
        </form>
      </div>
    </>
  );
};

export default Mainsection;
