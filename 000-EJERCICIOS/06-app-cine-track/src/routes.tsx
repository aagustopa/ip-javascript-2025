import { createBrowserRouter, redirect } from 'react-router';
import HomePage from './pages/HomePage';
// import LoginPage from './pages/LoginPage';
import { user } from './config/user';
import UserPage from './pages/UserPage';
import MyMovies from './components/MyMovies';
import MainLayout from './layout/MainLayout';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPageWithHookForm from './pages/LoginPageWithHookForm'

async function isUserLogged() {
    if (!user) {
        return redirect('/login');
    }
}

async function isUserNotLogged() {
    if (user) {
        return redirect('/user');
    }
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/login',
                element: <LoginPageWithHookForm />,
                loader: isUserNotLogged,
            },
            {
                path: '/register',
                element: <RegisterPage />,
                loader: isUserNotLogged,
            },
            {
                path: '/user',
                element: <UserPage />,
                loader: isUserLogged,
                children: [
                    {
                        path: 'my-movies',
                        element: <MyMovies />
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
])