import React,{useState} from 'react';

export const Transaction = (props) => {
  let sign = props.amount > 0 ? '+' : '-';
  return (
    <div className="transactionWrapper" style={props.amount > 0 ? {borderRight: '5px solid #17ce67'}:{borderRight: '5px solid #f25052'}}>
        <p className="deleteBtn">x</p>
        {/* <div>
        <img src="http://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-128.png" alt="X" width="10" />
        </div> */}
      <p className="m-1">Description</p>
      <p className="m-1">{sign}$20</p>
    </div>
  )
}