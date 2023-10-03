import { Outlet } from "react-router-dom";


const Mainlayout = () => {
    return (
        <div className="font-poppins bg-white">



            
        <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;