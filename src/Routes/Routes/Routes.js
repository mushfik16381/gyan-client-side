import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home/Home";
import SideNav from "../../Pages/Shared/SideNav/SideNav";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: async() => {
            return fetch(`https://gyan-server-side.vercel.app/products`)
        },
        children: [
            
            
        ]
    },
])