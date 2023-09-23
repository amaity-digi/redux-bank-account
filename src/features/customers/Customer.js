// In order to read data from Redux store , all we have to use the useSelector hook that is provided
// by react-redux.

import React from 'react'
import { useSelector } from 'react-redux'

function Customer() {
  // useSelector is basically creates a subscription to the store.
  // Whenever the store changes then the components that is subscribed to that store will re-render.
  const customer = useSelector((store) => store.customer); // store.Customer this name exactly the same name which is have inside combineReducers customer.
 
  return (
    <div>
      <h2>🫲Welcome,{customer?.payload?.fullName}</h2>
    </div>
  )
}

export default Customer