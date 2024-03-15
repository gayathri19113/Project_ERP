import React, { useState } from 'react';
import './ProductList.css';

const initialProducts = [
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.99, stockQuantity: 20 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 19.99, stockQuantity: 15 },
    { id: 3, name: 'Product 3', category: 'Category C', price: 29.99, stockQuantity: 10 },
];

const ProductList = () => {
    const [products, setProducts] = useState(initialProducts);
    const [formData, setFormData] = useState({ name: '', category: '', price: 0, stockQuantity: 0 });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (isEditing) {
            const updatedProducts = products.map(product =>
                product.id === editId ? { ...product, ...formData } : product
            );
            setProducts(updatedProducts);
            setIsEditing(false);
            setEditId(null);
        } else {
            const newProduct = {
                id: products.length + 1,
                ...formData,
            };
            setProducts([...products, newProduct]);
        }
        setFormData({ name: '', category: '', price: 0, stockQuantity: 0 });
    };

    const handleEdit = id => {
        const productToEdit = products.find(product => product.id === id);
        setFormData(productToEdit);
        setIsEditing(true);
        setEditId(id);
    };

    const handleDelete = id => {
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);
    };

    return (
        <div className="product-list-container">
            <h2>Product List</h2>
            <form className="product-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
                <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
                <input type="number" name="stockQuantity" placeholder="Stock Quantity" value={formData.stockQuantity} onChange={handleChange} required />
                <button type="submit">{isEditing ? 'Edit' : 'Add'} Product</button>
            </form>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>${Number(product.price).toFixed(2)}</td> {/* Ensure product.price is converted to a number */}
                            <td>{product.stockQuantity}</td>
                            <td>
                                <button className="edit-btn" onClick={() => handleEdit(product.id)}>Edit</button>
                                <button className="delete-btn" onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
