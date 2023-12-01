import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';
import CurrencyDropdown from './components/CurrencyDropdown';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£'); // Default currency: Pound
  const [budget, setBudget] = useState(20000); // Set your initial budget value here
  const [expenses, setExpenses] = useState([]); // Set your initial expenses array here
  const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
  const remaining = budget - totalExpenses; // Calculate remaining budget

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <CurrencyDropdown setSelectedCurrency={setSelectedCurrency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList expenses={expenses} selectedCurrency={selectedCurrency} />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm selectedCurrency={selectedCurrency}/>
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};

export default App;
