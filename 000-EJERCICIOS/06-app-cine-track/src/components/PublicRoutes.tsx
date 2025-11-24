import { Outlet, Navigate } from 'react-router';
import { user } from '../config/user';

export default function PublicRoutes() {
    if (!user) {
        return <Outlet />;
    }

    return <Navigate to="/user" />;
}
