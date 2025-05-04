import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/layout/DefaultLayout';
import GuestLayout from './components/layout/GuestLayout';
import Login from './auth/Login';
import Register from './auth/Register';
// import Users from './auth/Users';
import NotFound from './pages/NotFound';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />, 
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <Shop />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ]
    },
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    },
    {
        path: '*',
        element: <NotFound />,
    },
])

export default router;