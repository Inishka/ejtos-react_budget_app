import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = ({ selectedCurrency }) => {
  const { expenses, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  // Function to format currency with the selectedCurrency symbol
  const formatCurrency = (amount) => {
    return selectedCurrency + amount.toFixed(2);
  };

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: {formatCurrency(budget - totalExpenses)}</span>
    </div>
  );
};

export default Remaining;
