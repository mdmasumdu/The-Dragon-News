import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dnews from "../Pages/Home/Dnews/Dnews";
import Privateroute from "./Privateroute";



const mycreatedroute = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                loader: ()=> fetch('../news.json'),
                element:<Home></Home>

            },
            {
                path:"/news/:id",
                element:<Privateroute><Dnews></Dnews></Privateroute>

            },
          
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        
        
        
        ]
    }
])
export default mycreatedroute;