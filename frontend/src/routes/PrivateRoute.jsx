import React from 'react'
import { Login } from '../components/authentication/Login';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';
import { LOGIN_SUCCESS } from '../redux/authReducer/actionType';

export const PrivateRoute = ({ children }) => {
    const { isAuth } = useSelector((store) => store.authReducer)
    const dispatch = useDispatch()
    const token = localStorage.getItem('e-token');
    if (isAuth) {
        return children;
    } if (token) {
        dispatch({ type: LOGIN_SUCCESS, payload: token })
        return children;
    } else {
        return <Navigate to='/login' element={<Login />} />
    }
}