import React, { useState } from 'react';
import './index.css';

function Expense() {
    const [input, setInput] = useState('');
    const [amount, setAmount] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [expenses, setExpenses] = useState([]);

    const addExpenses = () => {
        if (!input || !amount || !month || !year) return;
        const newExpense = {
            id: expenses.length + 1,
            title: input,
            amount: parseFloat(amount),
            month,
            year
        };
        setExpenses([...expenses, newExpense]);
        setInput('');
        setAmount('');
        setMonth('');
        setYear('');
    };

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    };

    return (
        <div className="expense-tracker">
            <h1>This is an Expense Tracker</h1>
            <div className="input-container">
                <input
                    placeholder="Enter Expense"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <input
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <input
                    placeholder="Enter Month"
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
                <input
                    placeholder="Enter Year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                />
                <button onClick={addExpenses}>Add</button>
            </div>
            <div className="expenses-list">
                <ul>
                    {expenses.map((expense) => (
                        <li key={expense.id} className="expense-item">
                            <span>{expense.title}</span>
                            <span>{expense.amount}</span>
                            <span>{expense.month}/{expense.year}</span>
                            <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Expense;
