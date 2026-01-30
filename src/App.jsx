import { useState } from "react";
import {
  Wallet,
  Trash2,
  Plus,
  Minus,
  TrendingUp,
  TrendingDown,
  Library,
} from "lucide-react";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const date = new window.Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.toLocaleTimeString("en-IN");
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  function addTransaction(text, amount) {
    if (!text || !amount) return;
    setTransactions((prev) => [
      { id: Date.now(), text: text, amount: amount },
      ...prev,
    ]);
    setText("");
    setAmount("");
  }
  function removeItem(id){
    setTransactions(prev => prev.filter(t=>t.id!==id));
  }

  const amounts = transactions.map((t) => t.amount);
  const balance = amounts.reduce((acc, val) => acc + val, 0);
  const income = amounts
    .filter((a) => a > 0)
    .reduce((acc, val) => acc + val, 0);
  const expense = amounts
    .filter((a) => a < 0)
    .reduce((acc, val) => acc + val, 0);
  return (
    <div className="container">
      {/* Header section */}
      <div className="header">
        <h2 className="logo">
          <Wallet className="wallet-logo" />
          Finance tracker
        </h2>
      </div>
      {/* Balance */}
      <div className="balance">
        <h4>CURRENT BALANCE</h4>
        <h1>&#8377;{balance}</h1>
      </div>
      {/*  income and expense */}
      <div className="income-exp">
        <div className="income">
          <span style={{ color: "#19a719ff" }}>
            INCOME <TrendingUp size={12} />
          </span>
          <p className="in-ex-amount" style={{ color: "#19a719ff" }}>
            &#8377;{income}
          </p>
        </div>
        <div className="expense">
          <span style={{ color: "#d81f1fff" }}>
            EXPENSE <TrendingDown size={12} />
          </span>
          <p className="in-ex-amount" style={{ color: "#d81f1fff" }}>
            &#8377;{expense}
          </p>
        </div>
      </div>
      {/* Transaction section */}
      <div className="transaction">
        <h2 className="sub-headers">Add Transaction</h2>
        <div className="hr"></div>
        <label htmlFor="description">Description</label>
        <input
          placeholder="e.g. Salary, Rent"
          id="description"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <label htmlFor="amount">
          Amount <span>(negative - expense, positive + income)</span>
        </label>
        <input
          placeholder="e.g. +200 or -3000"
          id="amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          onWheel={(e) => e.target.blur()}
        />

        <button
          type="submit"
          onClick={() => addTransaction(text, Number(amount))}
        >
          + Add Transaction
        </button>
      </div>
      <div className="chart-history">
        <div className="chart">
          <h2 className="sub-headers">Financial overview</h2>
          <p>Add transactions to see breakdown</p>
        </div>
        <div className="history">
          <h2 className="sub-headers">Transaction overview</h2>
          <div className="transactions">
            {transactions.length > 0 ? (
              <ul>
                {transactions.map((t) => (
                  <li key={t.id}>
                    {t.text} - {t.amount}{" "}
                    <span className="date">
                      {day}-{month}-{year} {hours}
                    </span>
                    <span className="trash" onClick={()=>removeItem(t.id)}><Trash2/></span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No transactions yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
