import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: async() => {
            return fetch(`https://gyan-server-side.vercel.app/products`)
        },
        children: [
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
])