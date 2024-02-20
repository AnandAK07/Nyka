import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

export const EditProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    picture: '',
    description: '',
    gender: '',
    category: '',
    price: 0
  })

  const navigate = useNavigate();

  const { id } = useParams()

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target;
    console.log(name, value)

    setFormData({ ...formData, [name]: value })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('e-token')
    const res = await axios({
      method: 'patch',
      url: `${process.env.REACT_APP_API_URL}/api/products/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: formData
    })
    const { status } = res;
    if (status) {
      return navigate('/dashboard')
    }
  }

  const handleDelete = async (id) => {
    console.log('edit', id)

    const token = localStorage.getItem('e-token')
    const res = await axios({
      method: 'delete',
      url: `${process.env.REACT_APP_API_URL}/api/products/${id}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Product Name" required />
        <input type="text" name="picture" value={formData.picture} onChange={handleChange} placeholder="Product Image URL" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Product Description" required></textarea>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="makeup">Makeup</option>
          <option value="skincare">Skincare</option>
          <option value="haircare">Haircare</option>
        </select>
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
        <button type="submit" className="submit-button">Update Product</button>
      </form>
    </div>
  )
}
