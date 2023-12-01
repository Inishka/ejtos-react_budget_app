import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({ remaining, selectedCurrency }) => {
  const { budget, setBudget } = useContext(AppContext);
  const [editableBudget, setEditableBudget] = useState(budget);

  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleSave = () => {
    if (editableBudget > 20000) {
      alert("The value cannot exceed than 20000");
      setEditableBudget(budget); // Reset to original budget value
      return;
    } else if (editableBudget < totalExpenses) {
      alert("The value cannot be less than spending");
      setEditableBudget(budget); // Reset to original budget value
      return;
    }
    setBudget(editableBudget);
  };

  return (
    <div className='alert alert-secondary'>
      <label htmlFor='budgetInput'>Budget:</label>
      <div className='input-group'>
        <div className='input-group-prepend'>
          <span className='input-group-text'>{ selectedCurrency }</span>
        </div>
        <input
          required='required'
          type='number'
          id='budgetInput'
          value={editableBudget}
          style={{ width: '8rem' }}
          onChange={(event) => setEditableBudget(parseInt(event.target.value))}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Budget;
