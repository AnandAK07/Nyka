import React, { useState } from 'react';
import axios from 'axios';
import "../style/add.css"; // Import your CSS file here

export const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    description: '',
    gender: '',
    category: '',
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const apiUrl = process.env.REACT_APP_API_URL;
  const handleSubmit = async (e) => {

    console.log(formData)
    e.preventDefault();
    try {
      const token = localStorage.getItem('e-token');
      await axios.post(`${apiUrl}/api/products`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="add-product-form">
        <input type="text" name="name" id="product-name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <input type="text" name="picture" id="product-picture" value={formData.picture} onChange={handleChange} placeholder="Product Image URL" required />
        <textarea name="description" id="product-description" value={formData.description} onChange={handleChange} placeholder="Product Description" required></textarea>
        <select name="gender" id="product-gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="category" id="product-category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
        </select>
        <input type="number" name="price" id="product-price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit" className="submit-button" id='btn'>Add Product</button>
      </form>
    </div>
  );
};

