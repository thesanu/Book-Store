// SellerDashboard.js
import './SellerDashboard.css';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const SellerDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('dashboard');

  const generateRevenueChartData = () => {
    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Revenue',
            data: [1000, 1500, 1200, 2000, 1800, 2500],
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            fill: false,
          },
        ],
      };
    }; 
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'inventory':
        return (
          <div>
            <h2>Inventory Management</h2>
            {/* Add CRUD operations and inventory list here */}
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2>Order Management</h2>
            {/* Add order list and processing features */}
          </div>
        );
      case 'add books':
        return (
          <div>
            <h2>Books Management</h2>
            {/* Add order list and processing features */}
          </div>
        );
        case 'revenue':
        return (
          <div>
            <h2>Revenue Chart</h2>
            <Line data={generateRevenueChartData()} />
          </div>
        );
      default:
        return (
          <div>
            <h1>Seller Dashboard</h1>
            {/* Add summary metrics or charts here */}
          </div>
        );
    }
  };

  return (
    <div>
      <div className="sidebar">
        <ul>
          <li onClick={() => setSelectedComponent('dashboard')}>Home</li>
          <li onClick={() => setSelectedComponent('inventory')}>Inventory</li>
          <li onClick={() => setSelectedComponent('add books')}>Add Books</li>
          <li onClick={() => setSelectedComponent('orders')}>Orders</li>
          <li onClick={() => setSelectedComponent('revenue')}>Revenue</li>
          <li onClick={() => setSelectedComponent('contact')}>Contact Us</li>
        </ul>
      </div>
      <div className="content">
        {renderComponent()}
      </div>
      <div className="user-profile">
        <span className="profile-icon">👤</span>
        <span className="notification-icon">🔔</span></div>
        <div className="cards-container">
          <div className="card">
            <p>Total Sale</p>
            <p>$10,000</p>
          </div>
          <div className="card">
            <p>New Orders</p>
            <p>5</p>
          </div>
        </div>
        <div className='cards-container'>
        <div className="card1">
            <p>Recent Orders</p>
            <p>10</p>
          </div>
          <div className="card1">
            <p>Delivery</p>
            <p>3</p>
            </div>
          </div>
      </div>
  );
};
export default SellerDashboard;