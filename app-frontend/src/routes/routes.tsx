import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout.tsx";
import Home from "../pages/Home.tsx";
import Article from "../pages/Article.tsx";
import SignUp from "../pages/SignUp.tsx";
import SignIn from "../pages/SignIn.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            { path: '/', element: <Home /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/signin', element: <SignIn /> },
            { path: '/articles/:articleId', element: <Article /> }
        ]
    },
]);

export default router;