import { useUser } from "@clerk/clerk-react";
import { FaWallet, FaChartLine, FaExchangeAlt, FaCreditCard } from "react-icons/fa";
import "./dashboard.css";

export default function Dashboard() {
  const { user } = useUser();

  return (
    <div className="dashboard-container">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, {user?.firstName}!</h1>
          <p className="text-muted">Here's your financial overview</p>
        </div>
        <button className="add-transaction-btn">
          <FaExchangeAlt /> Add Transaction
        </button>
      </header>

      {/* Quick Stats */}
      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-icon">
            <FaWallet />
          </div>
          <div className="stat-details">
            <h3>Total Balance</h3>
            <p className="stat-value">$12,750.86</p>
            <span className="stat-change positive">+2.5% from last month</span>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-icon">
            <FaChartLine />
          </div>
          <div className="stat-details">
            <h3>Monthly Income</h3>
            <p className="stat-value">$4,250.00</p>
            <span className="stat-change positive">+12% from last month</span>
          </div>
        </div>

        <div className="stat-card warning">
          <div className="stat-icon">
            <FaCreditCard />
          </div>
          <div className="stat-details">
            <h3>Total Expenses</h3>
            <p className="stat-value">$2,850.00</p>
            <span className="stat-change negative">+8% from last month</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Recent Transactions */}
        <div className="dashboard-card transactions">
          <div className="card-header">
            <h3>Recent Transactions</h3>
            <button className="view-all">View All</button>
          </div>
          <div className="transaction-list">
            {[
              { id: 1, name: "Grocery Shopping", amount: -120.50, date: "2024-02-23", category: "Shopping" },
              { id: 2, name: "Salary Deposit", amount: 4250.00, date: "2024-02-20", category: "Income" },
              { id: 3, name: "Netflix Subscription", amount: -15.99, date: "2024-02-19", category: "Entertainment" },
            ].map(transaction => (
              <div key={transaction.id} className="transaction-item">
                <div className="transaction-info">
                  <h4>{transaction.name}</h4>
                  <span className="category">{transaction.category}</span>
                </div>
                <div className="transaction-amount">
                  <span className={transaction.amount > 0 ? "positive" : "negative"}>
                    {transaction.amount > 0 ? "+" : ""}{transaction.amount.toFixed(2)}
                  </span>
                  <span className="date">{transaction.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Overview */}
        <div className="dashboard-card budget">
          <div className="card-header">
            <h3>Budget Overview</h3>
            <button className="view-all">Manage</button>
          </div>
          <div className="budget-categories">
            {[
              { category: "Housing", spent: 1200, budget: 1500, color: "#4f46e5" },
              { category: "Food", spent: 450, budget: 600, color: "#06b6d4" },
              { category: "Transportation", spent: 200, budget: 300, color: "#8b5cf6" },
            ].map(item => (
              <div key={item.category} className="budget-item">
                <div className="budget-info">
                  <span>{item.category}</span>
                  <span>${item.spent} / ${item.budget}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress" 
                    style={{ 
                      width: `${(item.spent / item.budget) * 100}%`,
                      backgroundColor: item.color 
                    }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}