import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">E-Finance</div>
        <div className="nav-buttons">
          <SignedOut>
            <SignInButton mode="modal" className="sign-in-button"/>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
        </div>
      </nav>

      <main className="main-content">
        <SignedOut>
          <div className="hero-section">
            <h1>Welcome to E-Finance</h1>
            <p className="subtitle">Your Personal Finance Management Solution</p>
            <div className="features">
              <div className="feature-card">
                <i className="fas fa-chart-line"></i>
                <h3>Track Expenses</h3>
                <p>Monitor your spending habits</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-wallet"></i>
                <h3>Budget Planning</h3>
                <p>Set and achieve financial goals</p>
              </div>
              <div className="feature-card">
                <i className="fas fa-shield-alt"></i>
                <h3>Secure Platform</h3>
                <p>Your data is protected</p>
              </div>
            </div>
          </div>
        </SignedOut>
        <SignedIn>
          <div className="dashboard">
            <h2>Welcome to your Dashboard</h2>
            {/* Dashboard content will go here */}
          </div>
        </SignedIn>
      </main>
    </div>
  );
}