import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Dashboard from "./Modules/components/Dashboard";
import ProductList from "./Modules/components/ProductManagement";
import OrderList from "./Modules/components/OrdersManagement";

function App() {
    return (
        <Router>
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-brand">
                        <Link to="/" className="navbar-item">Dashboard</Link>
                    </div>
                    <div className="navbar-menu">
                        <div className="navbar-start">
                            <Link to="/productManagement" className="navbar-item">Product Management</Link>
                            <Link to="/ordersManagement" className="navbar-item">Orders Management</Link>
                        </div>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/productManagement" element={<ProductList />} />
                    <Route path="/ordersManagement" element={<OrderList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
