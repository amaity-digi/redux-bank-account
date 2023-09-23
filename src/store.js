import { configureStore } from "@reduxjs/toolkit";
import AccountReducer from "./features/accounts/AccountSlice";
import CustomerReducer from "./features/customers/CustomerSlice";

const store = configureStore({
    reducer: {
      account: AccountReducer,
      customer: CustomerReducer
    }
})

export default store;
