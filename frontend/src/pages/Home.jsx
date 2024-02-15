
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const Home = () => {

  // const navigate = useNavigate();
  // return navigate('/dashboard');
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}>
      <Link to={'/login'} style={{ border: 'none' }}>
        <button style={{ width: '7rem', height: '2rem', margin: '5rem', border: '1px solid black', background: 'skyblue', borderRadius: '5rem' }}>
          Login
        </button>
      </Link>
      <Link to={'/register'}>
        <button style={{ width: '7rem', height: '2rem', margin: '5rem', border: '1px solid black', background: 'skyblue', borderRadius: '5rem' }}>
          Register
        </button>
      </Link>
    </div>
  )
}
