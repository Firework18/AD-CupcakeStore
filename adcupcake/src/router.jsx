import { createBrowserRouter } from "react-router-dom";
import Layout from './layouts/Layout'
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import About from "./components/pages/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/store',
                element: <Store />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
])

export default router