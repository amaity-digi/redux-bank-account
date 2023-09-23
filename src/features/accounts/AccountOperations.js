import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deposit, payLoan, requestLoan, withdraw } from './AccountSlice';

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState('');
  const [currency, setCurrency] = useState('INR');
  const [withdrawlAmount, setWithdrawlAmount] = useState('');
  const [loanAmount, setLoanAmount] = useState('');
  const [loanPurpose, setLoanPurpose] = useState('');
 
  const dispatch = useDispatch();
  const account = useSelector((store) => store.account);
  console.log("acc", account);

  const handleClick = () => {
    if(!depositAmount) return;
    dispatch(deposit(depositAmount));
    setDepositAmount("");
  }

  const handleWithdraw = () => {
    if(!withdrawlAmount) return;
    dispatch(withdraw(withdrawlAmount));
    setWithdrawlAmount("");
  }

  const handleRequestLoan = () => {
    if(!loanAmount || !loanPurpose) return;
       dispatch(requestLoan(loanAmount, loanPurpose))
       setLoanAmount("");
       setLoanPurpose("");
  }

  const handlePayLoan = () => {
   dispatch(payLoan())
  }

  return (
    <div>
      <h2>Your Account Operation</h2>
      <div className='inputs'>
        <div>
          <label>Deposit</label>
          <input 
          type='number'
          value={depositAmount}
          onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          > 
           <option value='USD'>Us Doller</option>
           <option value='INR'>INR</option>
           <option value='GBP'>Pound</option>
          </select>
          <button onClick={handleClick}>Deposit{depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input 
          type='number'
          value={withdrawlAmount}
          onChange={(e) => setWithdrawlAmount(+e.target.value)}
          />
          <button onClick={handleWithdraw}>withdraw{withdrawlAmount}</button>
        </div>

        <div>
          <label>Request Loan</label>
          <input 
          type='number'
          value={loanAmount}
          placeholder='Enter Loan Amount'
          onChange={(e) => setLoanAmount(+e.target.value)}
          />
          <input 
          type='text'
          value={loanPurpose}
          placeholder='Enter Loan Purpose'
          onChange={(e) => setLoanPurpose(e.target.value)}
          />
          <button onClick={handleRequestLoan}>REQUEST LOAN</button>
        </div>

      { account?.loan > 0 &&
      <div>
        <span>Pay Back Rs.{account?.loan}</span>
        <button onClick={handlePayLoan}>Pay Loan</button>
      </div>
      }

      </div>
    </div>
  )
}

export default AccountOperations