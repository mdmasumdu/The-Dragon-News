/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Privateroute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useContext(AuthContext);

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }




    if(user){
        return children
    }

    
    return  <Navigate state={location.pathname} to="/login"> </Navigate>
};

export default Privateroute;