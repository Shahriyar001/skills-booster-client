import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import NotFound from "../../NotFound";
import Blog from "../../Pages/Blog/Blog/Blog";
import Category from "../../Pages/Category/Category/Category";
import Course from "../../Pages/Course/Course/Course";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import Conditions from "../../Pages/Terms/Conditions/Conditions";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://skills-booster-server.vercel.app/course')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://skills-booster-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/course/:id',
                element: <PrivetRoute><Course></Course></PrivetRoute>,
                loader: ({ params }) => fetch(`https://skills-booster-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Conditions></Conditions>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    }
])