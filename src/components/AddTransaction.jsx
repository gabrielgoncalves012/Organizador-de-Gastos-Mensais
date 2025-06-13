import React, { useState } from 'react';

function AddTransaction({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    const newTransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };

    addTransaction(newTransaction);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Descrição"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor (positivo ou negativo)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default AddTransaction;
