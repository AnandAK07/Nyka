import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutPage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('e-token');
        navigate('/login');
    };

    return (
        <div>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export { LogoutPage };
