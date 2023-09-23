// Here We placed Reducer, Action creater and initial state in this slice folder.

//initial state
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false
};

//reducer
export default function AccountReducer(state = initialStateAccount, action) {
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
//Action Creater

export function deposit(amount, currency) {
  if(currency === 'USD'){
  return { type: "account/deposit", payload: amount };
  }
  return async function(dispatch, getState){
   const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
   const data = await response.json();
   const converted = data?.rates?.USD;
   console.log("Data", data,"converted", converted);
   dispatch({ type: "account/deposit", payload: converted});
  }
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      amount,
      purpose,
    },
  };
}

export function payLoan() {
  return { type: "account/payLoan" };
}

// store.dispatch(deposit(900));
// console.log("Deposit: ", store.getState());
// store.dispatch(withdraw(300));
// console.log("Withdrawl: ", store.getState());
// store.dispatch(requestLoan(500, "Bike Loan"));
// console.log("Request Loan: ", store.getState());
// store.dispatch(payLoan());
// console.log("payLoan: ", store.getState());
