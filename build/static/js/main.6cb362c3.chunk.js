(this["webpackJsonpexpense-tracker-app"]=this["webpackJsonpexpense-tracker-app"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),o=t.n(c),s=(t(16),function(){return r.a.createElement("p",{className:"header"},"Expense Tracker")}),l=t(2),i=t(10),m=t(5),u=function(e,a){switch(a.type){case"ADD_TRANSACTION":return Object(m.a)({},e,{transactions:[a.payload.transaction].concat(Object(i.a)(e.transactions)),balance:a.payload.total});case"DELETE_TRANSACTION":return Object(m.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==a.payload.id})),balance:a.payload.total});default:return e}},p={transactions:[],balance:0},d=Object(n.createContext)(u,p),E=function(e){var a=e.children,t=Object(n.useReducer)(u,p),c=Object(l.a)(t,2),o=c[0],s=c[1];return r.a.createElement(d.Provider,{value:{transactions:o.transactions,balance:o.balance,addTransaction:function(e){var a=o.balance+parseFloat(e.amount);s({type:"ADD_TRANSACTION",payload:{transaction:e,total:a}})},deleteTransaction:function(e,a){var t=o.balance-parseFloat(a);s({type:"DELETE_TRANSACTION",payload:{id:e,total:t}})}}},a)},f=function(){var e=Object(n.useContext)(d).balance;return r.a.createElement("div",{className:"totalWrapper"},r.a.createElement("p",{className:"totalText"},"Current Balance"),r.a.createElement("p",{className:"amountText"},"$",e))},N=function(){var e=Object(n.useContext)(d).transactions,a=e.length&&e.map((function(e){return parseFloat(e.amount)})),t=a.length&&a.filter((function(e){return e>0})).reduce((function(e,a){return e+a}),0),c=a.length&&a.filter((function(e){return e<0})).reduce((function(e,a){return e-a}),0);return r.a.createElement("div",{className:"incomeExpenseWrapper"},r.a.createElement("div",{className:"incomeWrapper"},r.a.createElement("p",{className:"incomeText m-1"},"Income"),r.a.createElement("p",{className:"incomeAmountText m-1"},"$",t||"0.00")),r.a.createElement("div",{className:"expenseWrapper"},r.a.createElement("p",{className:"expenseText m-1"},"Expense"),r.a.createElement("p",{className:"expenseAmountText m-1"},"$",c?Math.abs(c):"0.00")))},b=function(e){var a=e.transaction.amount>0?"+":"-";return r.a.createElement("div",{className:"transactionWrapper",style:e.transaction.amount>0?{borderRight:"5px solid #17ce67"}:{borderRight:"5px solid #f25052"}},r.a.createElement("p",{className:"deleteBtn",onClick:function(){return e.deleteTransaction(e.transaction.id,e.transaction.amount)}},"x"),r.a.createElement("p",{className:"m-1"},e.transaction.description),r.a.createElement("p",{className:"m-1"},a,"$",Math.abs(e.transaction.amount)))},v=function(){var e=Object(n.useContext)(d),a=e.transactions,t=e.deleteTransaction,c=function(e,a){t(e,a)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"transactionHistoryText m-1"},"Transaction History"),r.a.createElement("div",{className:"transactionsWrapper",style:a.length?{}:{lineHeight:6}},a&&a.length?a.map((function(e,a){return r.a.createElement(b,{transaction:e,key:a,deleteTransaction:c})})):r.a.createElement("p",null,"No History")))},T=t(4),h=t.n(T),x=function(){var e=Object(n.useState)(""),a=Object(l.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),i=s[0],m=s[1],u=Object(n.useContext)(d).addTransaction;return r.a.createElement("div",{className:"addTransactionWrapper"},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!t)return h()("Oops!","Please enter description!","warning");if(!i)return h()("Oops!","Please enter amount!","warning");var a={id:Math.floor(1e4*Math.random()),description:t,amount:parseFloat(i)};u(a),m(""),c("")}},r.a.createElement("div",{className:"descriptionWrapper"},r.a.createElement("label",{className:"descriptionLabel"},"Description"),r.a.createElement("input",{type:"text",className:"inp",onChange:function(e){return c(e.target.value)},value:t})),r.a.createElement("div",{className:"amountWrapper"},r.a.createElement("label",{className:"amountLabel"},"Transaction Amount"),r.a.createElement("input",{type:"number",className:"inp",onChange:function(e){return m(e.target.value)},value:i})),r.a.createElement("button",{className:"addBtn"},"Add transaction")))};t(19);var y=function(){return r.a.createElement(E,null,r.a.createElement("div",{className:"App-header"},r.a.createElement(s,null),r.a.createElement(f,null),r.a.createElement("div",{className:"bodyWrapper"},r.a.createElement(N,null),r.a.createElement(v,null),r.a.createElement("p",{className:"transactionHistoryText m-20"},"Add New Transaction"),r.a.createElement(x,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.6cb362c3.chunk.js.map