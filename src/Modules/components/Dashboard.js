import React, { useEffect } from 'react';
import './Dashboard.css'; // Import CSS file for Dashboard styling

function Dashboard() {
    useEffect(() => {
        // Add a class to the body element when the Dashboard component mounts
        document.body.classList.add('dashboard-loaded');

        // Cleanup function to remove the class when the component unmounts
        return () => {
            document.body.classList.remove('dashboard-loaded');
        };
    }, []); // Run this effect only once when the component mounts

    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Welcome to Your Dashboard</h2>
            <p className="dashboard-description">
                Your journey with our ERP System begins here. Let's explore some key features and functionalities together:
            </p>
            <ul className="dashboard-features">
                <li>Gain insights at a glance with real-time analytics and metrics.</li>
                <li>Effortlessly manage your products, orders, and inventory.</li>
                <li>Stay organized with intuitive navigation and user-friendly interfaces.</li>
                <li>Collaborate seamlessly with your team members across departments.</li>
                <li>Customize your dashboard to suit your specific business needs.</li>
            </ul>
            <p className="dashboard-cta">
                Start maximizing your efficiency and productivity today!
            </p>
        </div>
    );
}

export default Dashboard;
