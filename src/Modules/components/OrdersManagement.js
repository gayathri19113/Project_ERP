import React, { useState } from 'react';
import './OrderList.css';

const initialOrders = [
    { id: 1, orderId: 'ORD1XRT', customerName: 'SteveJobs', orderDate: '2022-06-12', status: 'Pending' },
    { id: 2, orderId: 'ORD2XRT', customerName: 'Zuck', orderDate: '202-06-11', status: 'Shipped' },
    { id: 3, orderId: 'ORD3VC', customerName: 'sundhar', orderDate: '2020-12-10', status: 'Delivered' },
    { id: 4, orderId: 'ORD4VC', customerName: 'Satya N', orderDate: '2021-04-12', status: 'Pending' },
];

const OrderList = () => {
    const [orders, setOrders] = useState(initialOrders);
    const [formData, setFormData] = useState({ orderId: '', customerName: '', orderDate: '', status: '' });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        const newOrder = {
            id: orders.length + 1,
            ...formData,
        };
        setOrders([...orders, newOrder]);
        setFormData({ orderId: '', customerName: '', orderDate: '', status: '' });
    };

    return (
        <div className="order-list-container">
            <h2>Order List</h2>
            <form className="order-form" onSubmit={handleSubmit}>
                <input type="text" name="orderId" placeholder="Order ID" value={formData.orderId} onChange={handleChange} required />
                <input type="text" name="customerName" placeholder="Customer Name" value={formData.customerName} onChange={handleChange} required />
                <input type="date" name="orderDate" placeholder="Order Date" value={formData.orderDate} onChange={handleChange} required />
                <input type="text" name="status" placeholder="Status" value={formData.status} onChange={handleChange} required />
                <button type="submit">Add Order</button>
            </form>
            <table className="order-table">
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Order Date</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(order => (
                    <tr key={order.id}>
                        <td>{order.orderId}</td>
                        <td>{order.customerName}</td>
                        <td>{order.orderDate}</td>
                        <td>{order.status}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderList;
