import { createBrowserRouter } from "react-router-dom";
import AddService from "../../components/AddService/AddService";
import AllServices from "../../components/AllServices/AllServices";
import Blog from "../../components/Blog/Blog";
import MyReviews from "../../components/MyReviews/MyReviews";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import ServiceDetails from "../../components/ServiceDetails/ServiceDetails";

import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";


export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/', element: <Home></Home>
            },
            {
                path: '/allservices', element: <AllServices></AllServices>
            },
            {
                path: '/myreviews', element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/addservice', element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '/signup', element: <SignUp></SignUp>
            },
            {
                path: '/login', element: <Login></Login>
            },
            {
                path: '/blog', element: <Blog></Blog>
            },
            {
                path: '/serviceDetail/:id', element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }
])