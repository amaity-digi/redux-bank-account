import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/AccountSlice";
import CustomerReducer from "./features/customers/CustomerSlice";
// You should not be using the redux core package by itself today, except for learning purposes.
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Just for learning Purpose first I will go for redux then reduxjs/toolkit.

// npm i react-redux : Only through this package is how redux and react application can actually talk 
// to each others.

//combineReducers:
//It takes an object where the keys represent the state's different sections (e.g., "account" and "customer"),
// and the values are the corresponding reducer functions.
// it's common to have multiple reducers, each handling a different part of the state 
const rootReducer =  combineReducers({
    account: AccountReducer,
    customer: CustomerReducer
})

const store = createStore(rootReducer);

export default store;

