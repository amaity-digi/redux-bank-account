//middleware: A function that sits between dispatching the action and store.
//it's allows us to run the code after dispatching , but before reaching the reducer in the store.
// Basically Component --> dispatch --> Middleware --> store.
// This is the perfect place for our asynchronous API call , as well as other operation.
//The most popular Middleware in Redux is called Redux Thunk.
//Basically Thunk allows to wait before dispatching the fetch data into the store.

import React from 'react'

function BalanceDisplay() {
  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD"
    }).format(value);
  }

  return (
    <div className='balance'>
      {formatCurrency(1)}
    </div>
  )
}

export default BalanceDisplay