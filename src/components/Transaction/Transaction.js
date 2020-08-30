import React from 'react';

export const Transaction = (props) => {
  let sign = props.amount > 0 ? '+' : '-';
  return (
    <div className="transactionWrapper" style={props.amount > 0 ? {borderRight: '5px solid #17ce67'}:{borderRight: '5px solid #f25052'}}>
        <p className="deleteBtn">x</p>
      <p className="m-1">Description</p>
      <p className="m-1">{sign}$20</p>
    </div>
  )
}