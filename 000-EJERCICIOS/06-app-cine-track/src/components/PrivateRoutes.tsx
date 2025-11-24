import { Outlet, Navigate } from 'react-router';
import { user } from '../config/user';

export default function PrivateRoutes() {
    if (user) {
        return <Outlet />;
    }

    return <Navigate to="/login" />;
}
