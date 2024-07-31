import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Item from "../pages/item";
import Market from "../pages/market";
import Layout from "../layout";
import path from "path";

const Route = () =>{

    const router = createBrowserRouter([
        {
            path:"/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Home/>,
                },
                {
                    path: "item",
                    element: <Item/>,
                },
                {
                    path: "market",
                    element: <Market/>,
                },
            ]
        }
      ]);


    return <RouterProvider router={router} />
}

export default Route;