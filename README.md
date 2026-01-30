# 💰 Finance Tracker

A modern and intuitive Finance Tracker application built with React and Vite. This application helps users track their income and expenses, calculate their current balance in real-time, and view a history of their transactions.

## ✨ Features

- **Real-time Balance Calculation**: Automatically updates your current balance as you add income or expenses.
- **Income & Expense Tracking**: Categorizes transactions to show total income and total expense separately.
- **Transaction History**: Displays a list of all transactions with details including description, amount, and timestamp (Date & Time).
- **Persistent Storage**: Uses Local Storage to save your transactions, so your data remains available even after refreshing the page.
- **Delete Transactions**: Easily remove unwanted transactions from your history.
- **Responsive Design**: Works seamlessly on different screen sizes.

## 🛠️ Tech Stack

- **[React](https://react.dev/)**: JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.
- **[Lucide React](https://lucide.dev/icons/)**: Beautiful & consistent icons.
- **CSS**: Custom styling for a clean and modern look.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1.  **Clone the repository** (if applicable) or download the source code.
    ```bash
    git clone https://github.com/Sahibxaae/Finance-tracker.git
    cd Finance-tracker
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    The terminal will show the local address (usually `http://localhost:5173/`). Open this URL in your web browser.

## 📂 Project Structure

```
finance-tracker/
├── public/              # Static assets
├── src/
│   ├── assets/          # Project assets (images, etc.)
│   ├── components/      # Reusable React components
│   ├── App.css          # Main application styles
│   ├── App.jsx          # Main application logic
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## 📝 Usage

1.  **Add a Transaction**:
    *   Enter a description (e.g., "Salary", "Groceries").
    *   Enter an amount. Use a positive number for **Income** (e.g., `5000`) and a negative number for **Expense** (e.g., `-200`).
    *   Click the **Add Transaction** button.
2.  **View Balance**: Your Balance, Income, and Expense totals will update instantly.
3.  **Remove Transaction**: Click the trash icon next to any transaction in the history list to delete it.

## 📄 License

This project is licensed under the MIT License.
