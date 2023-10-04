import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Dynamic = () => {


    const [data,setData] = useState([])

    useEffect(()=>{
        fetch(`../news.json`)
        .then(res=>res.json())
        .then(data=> setData(data))
    },[])

  
    const {id} = useParams()
    const news = data.find(news=> news.category_id === id)
    console.log(news)
    
    
    return (
        <div>

            <h1>Dynamic data{id}</h1>

        
            
            
        </div>
    );
};

export default Dynamic;