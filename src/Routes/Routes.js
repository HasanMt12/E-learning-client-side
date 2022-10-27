import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import Login from "../Pages/access to login/Login/Login";
import Courses from "../Pages/Courses/Courses";
import ListDetails from "../Pages/DynamicCourseList/ListDetails/ListDetails";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/access to login/Registration/Registration";
import PremiumAccess from "../Pages/Premium page/PremiumAccess";
import Blog from "../Pages/blog/Blog";
import Error from "../Pages/ErrorPage/Error";
import PrivetRoutes from "./PrivetRoutes";
import Faq from "../Pages/Faq";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element:<Courses></Courses>,
                loader: ()=> fetch('https://p-hero-assignment10.vercel.app/courses')
            },
            {
                path:'/courses/:id',
                element: <ListDetails></ListDetails>,
                loader: ({params}) => fetch(`https://p-hero-assignment10.vercel.app/courses/${params.id}`)
            },
            {
                path:'/register',
                element: <Registration></Registration>
            },

            {
                path:'/login',
                element: <Login></Login>
            },
             {
                path:'/checkout/:id',
                element: <PrivetRoutes><PremiumAccess></PremiumAccess></PrivetRoutes>,
                 loader: ({params}) => fetch(`https://p-hero-assignment10.vercel.app/courses/${params.id}`)
               
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/FAQ',
                element: <Faq></Faq>

            }
            
        ]
    }
])