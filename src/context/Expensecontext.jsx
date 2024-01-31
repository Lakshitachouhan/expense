import { createContext, useReducer } from "react";
import Expensereducer from "./Expensereducer";

const Expensecontext = createContext();

export const ExpenseProvider = ({ children }) => {
  const initialstate = {
    transaction: [],
    edit: { transaction: {}, editmode: false },
  };

  const [state, dispatch] = useReducer(Expensereducer, initialstate);
  return (
    <Expensecontext.Provider
      value={{
        ...state,
        dispatch,
      }}>
      {children}
    </Expensecontext.Provider>
  );
};

export default Expensecontext;
