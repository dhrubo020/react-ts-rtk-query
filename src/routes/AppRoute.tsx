import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../common/MainLayout';
import Login from '../features/auth/Login';
import Dashboard from '../features/dashboard/Dashboard';
import Profile from '../features/Profile/Profile';
import PrivateRoute from './PrivateRoute';

export default function AppRoutes() {
    return (
        <Routes>
            {/* public */}
            <Route path="/login" element={<Login />} />

            {/* private */}
            <Route element={<PrivateRoute />}>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Route>

            {/* default */}
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
