import React from 'react';

export default function InputBudget({input, handleBudgetChange}) {
    return (
        <div className='input-budget-div'>
            Enter your budget in $:
            <input 
                value={input}
                type='number'
                className='budget-input'
                onChange={handleBudgetChange}
            />
        </div>
    )
}