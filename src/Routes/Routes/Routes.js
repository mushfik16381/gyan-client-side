import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: async() => {
                    return fetch(`https://gyan-server-side.vercel.app`)
                },
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`https://gyan-server-side.vercel.app/products/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    
    {
        path: '/register',
        element: <Register></Register>
    },
    {path: '*', element: <Error></Error>}
])