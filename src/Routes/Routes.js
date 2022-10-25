import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main'
import Courses from "../Pages/Courses/Courses";
import List from "../Pages/DynamicCourseList/List";
import ListDetails from "../Pages/DynamicCourseList/ListDetails/ListDetails";
import Home from "../Pages/Home/Home";
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
            
        ]
    }
])