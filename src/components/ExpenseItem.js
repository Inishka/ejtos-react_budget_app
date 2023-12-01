// ExpenseItem.js
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);
  const { name, cost, selectedCurrency } = props;

  const handleDeleteExpense = () => {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: props.id,
    });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10, // Decrease by 10
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  // Mapping of currency symbols
  const currencySymbols = {
    '$': '$',
    '£': '£',
    '€': '€',
    '₹': '₹',
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        {currencySymbols[selectedCurrency]} {/* Display the appropriate currency symbol */}
        {cost}
      </td>
      <td>
        <button onClick={() => increaseAllocation(name)}  className="circle-button-green"> + </button>
      </td>
      <td>
      <button
  onClick={() => decreaseAllocation(name)}className="circle-button-red">-</button> {/* Move the decrease button here */}
      </td>
      <td>
        <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete> {/* Move the Delete button here */}
      </td>
    </tr>
  );
};

export default ExpenseItem;
