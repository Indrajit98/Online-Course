import { createBrowserRouter } from "react-router-dom";
import CourseCategory from "../../components/CourseCategory";
import CourseDetails from "../../components/CourseDetails";
import Home from "../../components/Home";
import Register from "../../components/Register";
import Login from "../../components/Login";
import Main from "../../layout/Main";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../../components/ErrorPage";
import Blog from "../../components/Blog";
import FAQ from "../../components/FAQ";



export const routes = createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',element:<Home></Home>,
                loader:() => fetch('https://web-course-data-server.vercel.app/allCourse'),
            },
            {
                path:'/category/:id',element:<CourseCategory></CourseCategory>,
                loader:({params}) => fetch(`https://web-course-data-server.vercel.app/category/${params.id}`),
            },
            {
                path:'/courseDetails/:id',element:<PrivateRoute><CourseDetails></CourseDetails></PrivateRoute> ,
                loader:({params})=> fetch(`https://web-course-data-server.vercel.app/course/${params.id}`)
            },
            {
                path:'/login',element:<Login></Login>
            },
            {
                path:'/register',element:<Register></Register>
            },
            {
                path:'/faq',element:<FAQ></FAQ>
            },
            {
                path:'/blog',element:<Blog></Blog>
            }
            
        ]
    }

])