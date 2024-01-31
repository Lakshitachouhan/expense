import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import Expensecontext from "../context/Expensecontext";
import { FaEdit } from "react-icons/fa";
import { deleteli, edittransaction } from "../context/Expenseaction";

const Listitem = ({ transaction }) => {
  const { dispatch } = useContext(Expensecontext);
  const handledelete = (id) => {
    const data = deleteli(id)
    dispatch({
      type: "DELETE",
      payload: data,
    });
  };
  const handleedit = (transaction) => {
    const data = edittransaction(transaction);
    dispatch({
      type: "EDIT",
      payload: data,
    });
  };

  return (
    <>
      <li>
        <p>₹{transaction.amount}</p>
        <p>{transaction.text}</p>
        <span>
          <FaTrash id="delete" onClick={() => handledelete(transaction.id)} />
          <FaEdit id="edit" onClick={() => handleedit(transaction)} />
        </span>
      </li>
    </>
  );
};

export default Listitem;
