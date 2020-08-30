import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { TotalAmount } from './components/TotalAmount/TotalAmount';
import { IncomeExpense } from './components/IncomeExpense/IncomeExpense';
import { Transaction } from './components/Transaction/Transaction';
import { AddTransaction } from './components/AddTransaction/AddTransaction';

function App() {
  return (
    <div className="App-header">
      {/* <div className="mainWrapper"> */}
        <Header />
        <TotalAmount />
        <div className="bodyWrapper">
          <IncomeExpense />
          <p className="transactionHistoryText m-1">Transaction History</p>
          <div className="transactionsWrapper">
            <Transaction />
            <Transaction amount={50} />
            <Transaction />
          </div>
          <p className="transactionHistoryText m-20">Add New Transaction</p>
          <AddTransaction />
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
