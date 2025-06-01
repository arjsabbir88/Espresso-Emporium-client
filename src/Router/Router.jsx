import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home/Home";
import Error from "../Error/Error";
import Layout from "../Layout/Layout";
import AddProduct from "../Pages/AddProduct/AddProduct";



export const Router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/add-product',
                Component: AddProduct
            }
            
        ]
    }
])