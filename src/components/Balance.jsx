import React from 'react';

function Balance({ transactions }) {
  const total = transactions.reduce((acc, t) => acc + t.amount, 0).toFixed(2);
  return (
    <div className="balance">
      <h2>Gastos do mês atual</h2>
      <p>Total de gastos: R$ {total}</p>
    </div>
  );
}

export default Balance;
