import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../redux/slices/auth/useAuth';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
