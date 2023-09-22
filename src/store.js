import { createStore } from "redux";
// You should not be using the redux core package by itself today, except for learning purposes.
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Just for learning Purpose first I will go for redux then reduxjs/toolkit.

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };

    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

store.dispatch({ type: "account/deposit", payload: 500000 });

console.log("Deposit: ", store.getState());

store.dispatch({ type: "account/withdraw", payload: 1000 });
console.log("Withdrawl: ", store.getState());

store.dispatch({
  type: "account/requestLoan",
  payload: {
    amount: 20000,
    purpose: "Car Loan",
  },
});

console.log("Request Loan: ", store.getState());

store.dispatch({type: "account/payLoan"})

console.log("payLoan: ", store.getState());
