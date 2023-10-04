import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Lefside = () => {

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        fetch('../categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className="text-black">
            <h1 className="text-2xl font-bold text-center ">All Category</h1>

            <div className="space-y-6 mt-5">
                {
                    categories.map(category=><NavLink key={category.id} to={`/category/${category.id}`}  className={`block md:pl-16`}>{category.name}</NavLink>)
                }
            </div>

            
        </div>
    );
};

export default Lefside;