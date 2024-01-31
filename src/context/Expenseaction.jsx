export const deleteli = (id) => {
  return id;
};
export const savetransaction = (text, amount) => {
  return { id: crypto.randomUUID(), text: text, amount: +amount };
};

export const edittransaction = (transaction) => {
  return transaction;
};

export const updatetransaction = (newtransaction) => {
  return newtransaction;
};
