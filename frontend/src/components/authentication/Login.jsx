import axios from 'axios';
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { store } from '../../redux/store';
import { login } from '../../redux/authReducer/action';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const { token, isAuth, loading, error, success } = useSelector((store) => store.authReducer)

  const loggedtoken = localStorage.getItem('e-token');
  const dispatch = useDispatch()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form)
    dispatch(login(form))
  }

  if (isAuth) {
    return navigate('/dashboard');
  }

  return (
    <div style={{ background: '#FFFFFF', border: '1px solid black', width: '30%', textAlign: 'center', marginLeft: '35%', marginTop: '5%' }} >
      <div >
        <h2 >
          Login to your account
        </h2>
      </div>

      <div >
        <form action="#" method="POST" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">
              Email address
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="text-sm">
                <a href="#">
                  Forgot password?
                </a>
              </div>
            </div>
            <div >
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <p>
          Not a member?{' '}
          <Link to={'/register'}>
            Create an account
          </Link>
        </p>
      </div>
    </div>
  )
}