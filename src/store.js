import { combineReducers, createStore } from "redux";
// You should not be using the redux core package by itself today, except for learning purposes.
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Just for learning Purpose first I will go for redux then reduxjs/toolkit.

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
   fullName: "",
   nationalID: "",
   createdAt: ""
}

function AccountReducer(state = initialStateAccount, action) {
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

function CustomerReducer(state = initialStateCustomer, action){
  switch(action.type){
    case "customer/createCustomer":
    return {...state, payload: {
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt
    }}

    case "customer/updateCustomer":
        return{...state, payload: {
            fullName: action.payload.fullName
        }
        
        }

    default:
     return state;
  }
}

const rootReducer =  combineReducers({
    account: AccountReducer,
    customer: CustomerReducer
})

const store = createStore(rootReducer);

// Create Action Creater

function deposit(amount){
 return ({ type: "account/deposit", payload: amount });
}

function withdraw(amount){
    return ({ type: "account/withdraw", payload: amount });
}

function requestLoan(amount, purpose){
    return ({
        type: "account/requestLoan",
        payload: {
          amount,
          purpose,
        },
      });
}

function payLoan(){
    return ({type: "account/payLoan"})
}

store.dispatch(deposit(900));
console.log("Deposit: ", store.getState());
store.dispatch(withdraw(300));
console.log("Withdrawl: ", store.getState());
store.dispatch(requestLoan(500, "Bike Loan"));
console.log("Request Loan: ", store.getState());
store.dispatch(payLoan());
console.log("payLoan: ", store.getState());


function createCustomer(fullName, nationalID){
    return {
        type: "customer/createCustomer",
        payload: {fullName, nationalID, createdAt: new Date().toISOString()}
    }
}

function updateCustomer(fullName){
  return {
    type: "customer/updateCustomer",
    payload: {fullName}
  }
}

store.dispatch(createCustomer("Aj", 101));
console.log(store.getState());

store.dispatch(updateCustomer("Vivek Roy!"));
console.log("updated: ", store.getState());
