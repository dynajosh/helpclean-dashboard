import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="welcome-div">
        <h1>Welcome To OneBridge</h1>
      </div>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="card-icon">
            {" "}
            <span>
              <i className="las la-coins"></i>
            </span>
          </div>
          <div className="card-description">
            <p>Wallet Balance</p>
          </div>
          <div className="card-value">NGN25,000</div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon"></div>
          <div className="card-description">
            <p>Number of Api calls</p>
          </div>
          <div className="card-value">45</div>
        </div>
        <div className="dashboard-card">
          <div className="card-icon"></div>
          <div className="card-description"></div>
          <div className="card-value"></div>
        </div>
      </div>
    </div>
  );
}
