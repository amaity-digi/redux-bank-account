// Here We placed Reducer, Action creater and initial state in this slice folder.

import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer:{
    prepare(fullName, nationalID){
     return{
      payload:({fullName,nationalID, createdAt: new Date().toISOString()})
     }
    },
    reducer(state,action){
      state.fullName = action.payload.fullName
      state.nationalID = action.payload.nationalID
      state.createdAt = action.payload.createdAt
    }
  },
  updateName(state, action){
   state.fullName = action.payload;
  }
  }
});

export const {createCustomer, updateName} = customerSlice.actions
console.log("createCustomer", createCustomer("ashis", "101"));
export default customerSlice.reducer;

//Reducer:
// Reducers are functions that specify how the state of your application changes in response to actions.
// They take the current state and the action as arguments and return a new state.

// export default function CustomerReducer(state = initialStateCustomer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         payload: {
//           fullName: action.payload.fullName,
//           nationalID: action.payload.nationalID,
//           createdAt: action.payload.createdAt,
//         },
//       };

//     case "customer/updateCustomer":
//       return {
//         ...state,
//         payload: {
//           fullName: action.payload.fullName,
//         },
//       };
//     default:
//       return state;
//   }
// }

// //Action Creater:
// //First, you create an action, which is a plain JavaScript object with a type property
// // that describes the action and an optional payload property that carries data. 

// export function createCustomer(fullName, nationalID) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalID, createdAt: new Date().toISOString() },
//   };
// }

// export function updateCustomer(fullName) {
//   return {
//     type: "customer/updateCustomer",
//     payload: { fullName },
//   };
// }

// Dispatching Actions:
// Once you have an action, you dispatch it using the dispatch method provided by the Redux store.

// store.dispatch(createCustomer("Aj", 101));
// console.log(store.getState());

// store.dispatch(updateCustomer("Vivek Roy!"));
// console.log("updated: ", store.getState());
