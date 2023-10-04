import { Outlet } from "react-router-dom";


const Mainlayout = () => {
    return (
        <div className="font-poppins bg-white container mx-auto p-5">



            
        <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;