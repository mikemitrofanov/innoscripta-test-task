import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from "../pages/Home.tsx";
import Article from "../pages/Article.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            { path: '/', element: <Home /> },
            { path: '/articles/:articleId', element: <Article /> }
        ]
    },
]);

export default router;