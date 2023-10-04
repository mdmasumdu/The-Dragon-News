import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Dynamic from "../Pages/Home/Dynamic";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const mycreatedroute = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                children:[
                    {
                        path:'/category/:id',
                        element:<Dynamic></Dynamic>
                    }
                ]
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