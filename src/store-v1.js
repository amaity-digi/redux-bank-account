import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import AccountReducer from "./features/accounts/AccountSlice";
import CustomerReducer from "./features/customers/CustomerSlice";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
// configureStore: It's basically wrap around createStore and add a few functionallies to it.
// configureStore does a lot of things automatically for us. 
// What all automatically does???
// It automatically combine our reducers,automatically add thunk middleware and it will even automatically setup the devTools  

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

// applyMiddleware: Basically we told to Redux , our store that want to use the thunk middleware in our applications.
// composeWithDevTools: We are going to wrap this apply middleware because of to used redux extention. And this is the npm install cmd: npm i redux-devtools-extension
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;


// Copy of the store where we used composeWithDevTools,combineReducers,applyMiddleware using redux createStore 
// Basically lagecy version.
