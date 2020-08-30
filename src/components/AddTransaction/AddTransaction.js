import React from 'react';

export const AddTransaction = (props) => {
  return (
    <div className="addTransactionWrapper">
      <form>
          <div className="descriptionWrapper">
              <label className="descriptionLabel">Description</label>
              <input type="text" className="inp" />
          </div>
          <div className="amountWrapper">
              <label className="amountLabel">Transaction Amount</label>
              <input type="number" className="inp" />
          </div>
          <button className="addBtn">Add transaction</button>
      </form>
    </div>
  )
}