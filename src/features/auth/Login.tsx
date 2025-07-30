import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../redux/slices/auth/authApi';
import { setCredentials } from '../../redux/slices/auth/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation(
        {}
    );
    const location = useLocation();
    const from = location.state?.from?.pathname || '/profile';

    const [email, setUsername] = useState('admin@example.com');
    const [password, setPassword] = useState('admin123');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) return; // Basic check

        try {
            const result = await login({ email, password }).unwrap();
            dispatch(setCredentials(result));
            sessionStorage.setItem('token', result.token as string);
            navigate(from || '/profile', { replace: true });
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <div className="p-6 max-w-sm mx-auto">
            <h1 className="text-xl font-bold mb-4">Login</h1>
            <form onSubmit={handleLogin} className="space-y-4">
                <input
                    type="text"
                    placeholder="Email"
                    className="border p-2 w-full"
                    value={email}
                    defaultValue="admin@example.com"
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border p-2 w-full"
                    value={password}
                    defaultValue="admin123"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white py-2 px-4 rounded w-full"
                    disabled={isLoading}
                >
                    {isLoading ? 'Logging in...' : 'Login'}
                </button>
                {isError && (
                    <div style={{ color: 'red' }}>
                        Login failed. Check credentials.
                    </div>
                )}
            </form>
        </div>
    );
};

export default Login;
