import './App.css';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';

function App() {
  return (
    <div className="App">
      <h2>💵🤑 The Redux-Redux Bank 💴💵</h2>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
