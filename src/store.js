import { combineReducers, createStore } from "redux";
import AccountReducer from "./features/accounts/AccountSlice";
import CustomerReducer from "./features/customers/CustomerSlice";
// You should not be using the redux core package by itself today, except for learning purposes.
// We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.
// Just for learning Purpose first I will go for redux then reduxjs/toolkit.

const rootReducer =  combineReducers({
    account: AccountReducer,
    customer: CustomerReducer
})

const store = createStore(rootReducer);

export default store;

