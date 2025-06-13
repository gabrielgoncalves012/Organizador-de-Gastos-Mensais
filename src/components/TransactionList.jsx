import React from 'react';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <ul className="transaction-list">
      {transactions.map((t) => (
        <li key={t.id} className={t.amount < 0 ? "negative" : "positive"}>
          {t.description}: R$ {t.amount.toFixed(2)}
          <button onClick={() => deleteTransaction(t.id)}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;
