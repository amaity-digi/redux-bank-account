// Here We placed Reducer, Action creater and initial state in this slice folder.

//initial state
const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

// reducer
export default function CustomerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        payload: {
          fullName: action.payload.fullName,
          nationalID: action.payload.nationalID,
          createdAt: action.payload.createdAt,
        },
      };

    case "customer/updateCustomer":
      return {
        ...state,
        payload: {
          fullName: action.payload.fullName,
        },
      };
    default:
      return state;
  }
}

//Action Creater
export function createCustomer(fullName, nationalID) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateCustomer(fullName) {
  return {
    type: "customer/updateCustomer",
    payload: { fullName },
  };
}

// store.dispatch(createCustomer("Aj", 101));
// console.log(store.getState());

// store.dispatch(updateCustomer("Vivek Roy!"));
// console.log("updated: ", store.getState());
