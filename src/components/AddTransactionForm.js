
/*import React, {useState} from "react";
import './index.css';


function AddTransactionForm(){
    const [transactions, setTransactions] = useState([]);
    const addTransaction = async (newTransaction) => {
        try{
          const response = await fetch post("http://localhost:8001/transactions", newTransaction);
          
          const updatedTansactions = [...transactions, response.data];
          setTransactions(updatedTansactions);
          alert("Transaction added successfully!");
        } catch(error) {
            console.error(error);
            alert("Error Adding Transaction");
        }
    }
    const handleSubmit = (event) =>{
        event.preventDefault();

        const newTransaction = {
            id: Date.now(),
            date: event.target.date.value,
            description: event.target.description.value,
            category: event.target.category.value,
            amount: event.target.amount.value,
        };
        addTransaction(newTransaction);

        event.target.reset();
    }
    return(
       <div>
        <form onSubmit={handleSubmit} className="addition">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" required />
            <label htmlFor="description">Description :</label>
            <input type="text" id="description" name="description" required />
            <label htmlFor="category">Category:</label>
            <input type="text" id="category" name="category" required />
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" required />
            <button type="submit" className="add-btn">Add Transaction</button>
           </form>
       </div>
    )
}
export default AddTransactionForm;*/

/*import React, {useState} from "react";
import './index.css';


function AddTransactionForm() {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = async (newTransaction) => {
        try {
            const response = await fetch("http://localhost:8001/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTransaction),
            });

            const data = await response.json();
            const updatedTransactions = [...transactions, data];
            setTransactions(updatedTransactions);
            alert("Transaction added successfully!");
        } catch (error) {
            console.error(error);
            alert("Error Adding Transaction");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Date.now(),
            date: event.target.date.value,
            description: event.target.description.value,
            category: event.target.category.value,
            amount: event.target.amount.value,
        };

        addTransaction(newTransaction);
        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="addition">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required />
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" required />
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" required />
                <button type="submit" className="add-btn">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransactionForm;
*/
import React, { useState } from "react";
import './index.css';

function AddTransactionForm() {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = async (newTransaction) => {
        try {
            const response = await fetch("http://localhost:8001/transactions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newTransaction),
            });

            if (!response.ok) {
                throw new Error('Error adding transaction');
            }

            const data = await response.json();
            const updatedTransactions = [...transactions, data];
            setTransactions(updatedTransactions);
            alert("Transaction added successfully!");
        } catch (error) {
            console.error(error);
            alert("Error Adding Transaction");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Date.now(),
            date: event.target.date.value,
            description: event.target.description.value,
            category: event.target.category.value,
            amount: event.target.amount.value,
        };

        addTransaction(newTransaction);
        event.target.reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="addition">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" required />
                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" required />
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" name="category" required />
                <label htmlFor="amount">Amount:</label>
                <input type="number" id="amount" name="amount" required />
                <button type="submit" className="add-btn">Add Transaction</button>
            </form>
        </div>
    );
}

export default AddTransactionForm;


