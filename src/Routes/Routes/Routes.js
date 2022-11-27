import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layouts/DashboardLayout";
import Main from "../../Layouts/Main";
import AddProducts from "../../Pages/AddProducts/AddProducts";

import Blog from "../../Pages/Blog/Blog";
import CategoriesDetails from "../../Pages/CategoriesDetails/CategoriesDetails";
import MyOrders from "../../Pages/Dashboard/MyOders/MyOrders";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import SellerProducts from "../../Pages/Dashboard/SellerProducts/SellerProducts";
import DisplayError from "../../Pages/DisplayError/DisplayError";

import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

import Signup from "../../Pages/Signup/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
        errorElement: <DisplayError></DisplayError>,
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/sellingproducts',
                element: <SellerProducts></SellerProducts>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]

    }
]);
export default router;