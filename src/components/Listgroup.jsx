import React, { useContext } from "react";
import Listitem from "./Listitem";
import Expensecontext from "../context/Expensecontext";

const Listgroup = () => {
  const { transaction } = useContext(Expensecontext);
  return (
    <>
      <ul>
        {transaction.map((transaction) => (
          <Listitem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default Listgroup;
