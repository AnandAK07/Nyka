
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { PieChart } from '../components/PieChart'

export const Analytics = () => {
  const [product, setProducts] = useState([])

  const getData = async () => {
    try {
      let url = `${process.env.REACT_APP_API_URL}/api/products`;
      const token = localStorage.getItem('e-token')
      const data = await axios({
        method: 'get',
        url: url,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setProducts(data.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [])


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {product && <PieChart product={product} section={'Gender'} category={[...new Set(product.map(item => item.gender))]} />}
      {product && <PieChart product={product} section={'Category'} category={[...new Set(product.map(item => item.category))]} />}
    </div>
  )
}






