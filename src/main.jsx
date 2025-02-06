import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement:<Error />,
        children:[
            {
                index:true,
                path:'/AboutMe',
                element:<AboutMe/>,
            },
            {
                path:'/Portfolio',
                element:<Portfolio/>,
            }
        ],
    },
])
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
