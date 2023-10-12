// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookCatalog from './components/BookCatalog';
import Login from './LogIn';
import SignUp from './SignUp';
import { CartProvider } from './components/CartContext';
// import DashBoard from './components/DashBoard';
import ShoppingCart from './components/ShoppingCart'
import SellerDashboard from './components/SellerDashboard';

function App() {
  const [user, setUser] = useState(null); // Track user's authentication status

  return (
    <CartProvider user={user}>
    <Router>
      <Routes>
        <Route path="/" element={<BookCatalog user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/dashboard" element={<DashBoard />} /> */}
        <Route path="/sellerdashboard" element={<SellerDashboard />} />
        <Route path="/ShoppingCart" element={<ShoppingCart user={user} />} />
        {/* Other routes */}
      </Routes>
    </Router>
  </CartProvider>
  );
}

export default App;
