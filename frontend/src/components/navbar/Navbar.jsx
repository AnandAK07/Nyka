import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const links = [
        // title:'',
    ]
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to={'/dashboard'}>
                <h1>Dashboard</h1>
            </Link>
            <Link to={'/analytics'}>
                <h1>Analytics</h1>
            </Link>

            <Link to={'/login'}>
                <h1>Login</h1>
            </Link>
            <Link to={'/register'}>
                <h1>Register</h1>
            </Link>
        </div>
    )
}
