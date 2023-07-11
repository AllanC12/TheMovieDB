import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Movie from "../pages/Movie";
import App from "../App";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path:"/",
                element: <Home/>,
            },
            {
                path:"/movie/:id",
                element: <Movie/>,
            },
            {
                path:"/search",
                element: <Search/>,
            }
        ]
    }
 
])