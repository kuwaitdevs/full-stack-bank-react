import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { useAuth } from '../provider/authProvider';
import { ProtectedRoute } from '../routes/ProtectedRoute';

import Layout from 'layout/Layout';
import LayoutAuth from 'layout/LayoutAuth';

import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NotFound from '../pages/NotFound';
import BankProfile from '../pages/BankProfile';
import BankTransactions from '../pages/BankTransactions';
import BankUsers from '../pages/BankUsers';
import BankHome from '../pages/BankHome';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import License from '../pages/License';
import Contact from '../pages/Contact';

const Routes = () => {
    const { token } = useAuth();

    const routesPublic = [
        {
            element: token ? <LayoutAuth /> : <Layout />,
            path: '',
            children: [
                {
                    path: '',
                    element: <Home />,
                },
                {
                    path: 'about',
                    element: <About />,
                },
                {
                    path: 'privacy-policy',
                    element: <PrivacyPolicy />,
                },
                {
                    path: 'license',
                    element: <License />,
                },
                {
                    path: 'contact',
                    element: <Contact />,
                },
                {
                    path: '*',
                    element: <NotFound />,
                },
            ],
        },
    ];

    const routesAuthenticated = [
        {
            path: '/bank',
            element: <ProtectedRoute />,
            children: [
                {
                    path: 'home',
                    element: <BankHome />,
                },
                {
                    path: 'transactions',
                    element: <BankTransactions />,
                },
                {
                    path: 'profile',
                    element: <BankProfile />,
                },
                {
                    path: 'users',
                    element: <BankUsers />,
                },
            ],
        },
    ];

    const routesNotAuthenticated = [
        {
            element: <Layout />,
            path: '/',
            children: [
                {
                    path: 'login',
                    element: <Login />,
                },
                {
                    path: 'register',
                    element: <Register />,
                },
            ],
        },
    ];

    const router = createBrowserRouter([
        ...(!token ? routesNotAuthenticated : []),
        ...routesAuthenticated,
        ...routesPublic,
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
