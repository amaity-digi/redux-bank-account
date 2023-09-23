import { useSelector } from "react-redux";
import "./App.css";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";

function App() {
  const fullName = useSelector((store) => store.customer.payload?.fullName);
  console.log("cus", fullName);

  return (
    <div className="App">
      <h2>💵🤑 The Redux-Redux Bank 💴💵</h2>
      {!fullName  ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
