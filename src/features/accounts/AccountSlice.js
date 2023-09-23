import { createSlice } from "@reduxjs/toolkit";

//createSlice: a. It will automatically create action creaters from our reducers.
//b. it makes writing these reducers a lot easier because we no longer need that switch statement.and default case automatically handle
//c. we can actually mutate now, our state inside reducers.

//initial state
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state,action){
      state.balance += action.payload
      state.isLoading = false;
    },
    withdraw(state, action){
      state.balance -= action.payload
    },
    requestLoan:{  
      prepare(amount, purpose){
         return{
          payload: {amount,purpose}
         }
      },
      reducer(state,action){
      if(state.loan > 0) return;
      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance = state.balance + action.payload.amount;
    }},
    payLoan(state){
     state.balance -= state.loan;
     state.loan = 0;
     state.loanPurpose = "";
    },
    convertingCurrency(state){
      state.isLoading = true;
    }
  }
})


export const {payLoan,requestLoan,withdraw } = accountSlice.actions;

export function deposit(amount, currency) {
  if(currency === 'USD'){
  return { type: "account/deposit", payload: amount };
  }
  return async function(dispatch, getState){
    dispatch({type: "account/convertingCurrency"});
   const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
   const data = await response.json();
   const converted = data?.rates?.USD;
   console.log("Data", data,"converted", converted);
   dispatch({ type: "account/deposit", payload: converted});
  }
}

export default accountSlice.reducer;

// //reducer
// export default function AccountReducer(state = initialState, action) {
//   switch (action.type) {
//     case "account/deposit":
//       return { ...state, balance: state.balance + action.payload };

//     case "account/withdraw":
//       return { ...state, balance: state.balance - action.payload };

//     case "account/requestLoan":
//       if (state.loan > 0) return state;
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };

//     case "account/payLoan":
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: "",
//         balance: state.balance - state.loan,
//       };

//     default:
//       return state;
//   }
// }
// //Action Creater

// export function deposit(amount, currency) {
//   if(currency === 'USD'){
//   return { type: "account/deposit", payload: amount };
//   }
//   return async function(dispatch, getState){
//    const response = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
//    const data = await response.json();
//    const converted = data?.rates?.USD;
//    console.log("Data", data,"converted", converted);
//    dispatch({ type: "account/deposit", payload: converted});
//   }
// }

// export function withdraw(amount) {
//   return { type: "account/withdraw", payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: "account/requestLoan",
//     payload: {
//       amount,
//       purpose,
//     },
//   };
// }

// export function payLoan() {
//   return { type: "account/payLoan" };
// }
