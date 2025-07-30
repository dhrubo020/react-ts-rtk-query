import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/auth/authSlice';
import type { RootState } from '../redux/store';

const Header: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useSelector(
        (state: RootState) => state.auth
    );

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    return (
        <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
            <div className="text-xl font-bold">MyApp</div>
            <div>
                {isAuthenticated ? (
                    <>
                        <span className="mr-4">
                            Hello, {user?.name || 'User'}
                        </span>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-3 py-1 rounded"
                        >
                            Logout
                        </button>
                        <Link
                            to="/"
                            className="bg-blue-600 text-white px-3 py-1 rounded"
                        >
                            Dashboard
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="bg-blue-600 text-white px-3 py-1 rounded"
                        >
                            Login
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
