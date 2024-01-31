const Expensereducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "SAVE":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    case "EDIT":
      return {
        ...state,
        edit: { transaction: action.payload, editmode: true },
      };

    case "UPDATE":
      return {
        ...state,
        transaction: state.transaction.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        edit: { transaction: {}, editmode: false },
      };
  }
};
export default Expensereducer;
