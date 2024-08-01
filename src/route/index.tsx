import { createBrowserRouter, RouterProvider } from "react-router-dom"

const Route = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (<h1>Home</h1>)
        }, {
            path: "/item",
            element: (<h1>Item</h1>)
        }, {
            path: "/market",
            element: (<h1>Market</h1>)
        }
    ]);

    return <RouterProvider router={router} />
}

export default Route;