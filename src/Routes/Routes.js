import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import Login from "../Pages/access to login/Login/Login";
import Courses from "../Pages/Courses/Courses";
import ListDetails from "../Pages/DynamicCourseList/ListDetails/ListDetails";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/access to login/Registration/Registration";


export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element:<Courses></Courses>,
                loader: ()=> fetch('http://localhost:5000/courses')
            },
            {
                path:'/courses/:id',
                element: <ListDetails></ListDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path:'/register',
                element: <Registration></Registration>
            },

            {
                path:'/login',
                element: <Login></Login>
            }
            
            
        ]
    }
])