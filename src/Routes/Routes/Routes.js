import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";

import Blog from "../../Pages/Blog/Blog";
import CategoriesDetails from "../../Pages/CategoriesDetails/CategoriesDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/categories/:id',
                element: <CategoriesDetails></CategoriesDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/product_categories/${params.id}`)


            },



        ]
    },
    {
        
            path: '/dashboard',
            element: <DashboardLayout></DashboardLayout>,
            children:[
                {
                    path:'/dashboard',
                    element:<Dashboard></Dashboard>
                }
            ]
        
    }
]);
export default router;